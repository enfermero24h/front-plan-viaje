import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoricoService } from 'src/app/services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  historico: any[] = [];
  apiKey: string = '2068e308184179f56e3fe7fd3d09e2da'; // API Key para OpenWeather

  constructor(private historicoService: HistoricoService,private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.historicoService.getHistorico().subscribe(data => {
      this.historico = data;
      this.historico.forEach((registro) => {
        this.convertirMoneda(registro);
        this.obtenerClima(registro);
      });
    });
  }

  obtenerClima(registro: any): void {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${registro.ciudad.nombre}&units=metric&appid=${this.apiKey}`;
    this.http.get(url).subscribe((data: any) => {
      registro.clima = data.main.temp; // Guarda la temperatura en el objeto `registro`
      registro.condicionClimatica = data.weather[0].description; // Guarda la descripción del clima
    });
  }

  convertirMoneda(registro: any): void {
    const url = `https://api.exchangerate-api.com/v4/latest/COP`;
    this.http.get(url).subscribe((response: any) => {
      const currencyCode = this.getCurrencyCode(registro.ciudad.moneda);
      const tasaCambio = response.rates[currencyCode];
      if (tasaCambio) {
        registro.conversion = (registro.presupuesto_cop * tasaCambio).toFixed(2); // Calcula y guarda la conversión
      } else {
        registro.conversion = 'N/A'; // Si no se encuentra la tasa de cambio
      }
    });
  }

  // Método para obtener el código ISO de la moneda basado en el nombre
  getCurrencyCode(moneda: string): string {
    const currencyMap: { [key: string]: string } = {
      'Libra Esterlina': 'GBP',
      'Yen': 'JPY',
      'Dólar Estadounidense': 'USD',
      // Agrega más monedas según sea necesario
    };
    return currencyMap[moneda] || 'USD'; // Usa USD como valor predeterminado si la moneda no está en el mapa
  }

  volverAFinPlan(): void {
    this.router.navigate(['/']);
  }
}
