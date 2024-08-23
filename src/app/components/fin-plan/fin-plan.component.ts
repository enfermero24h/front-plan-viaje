import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/currency.service';
import { FinPlanService } from 'src/app/services/fin-plan.service';
import { SharedService } from 'src/app/services/shared.service';

interface ClimaData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

@Component({
  selector: 'app-fin-plan',
  templateUrl: './fin-plan.component.html',
  styleUrls: ['./fin-plan.component.css']
})

export class FinPlanComponent implements OnInit {
  @Input() presupuesto: number | null = null;
  @Input() pais: any;
  @Input() ciudad: any;

  clima: any;
  monedaLocal: string = '';
  nombreMoneda: string = '';
  conversion: number | null = null;
  tasaCambio: number = 0;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private finPlanService: FinPlanService,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.sharedService.selectedCiudadId$.subscribe(ciudadId => {
      this.ciudad = ciudadId;
    });
    this.sharedService.selectedPaisId$.subscribe(paisId => {
      this.pais = paisId;
      this.obtenerMonedaLocal();
    });
    this.sharedService.selectedpresupuesto.subscribe(presupuesto => {
      this.presupuesto = presupuesto;
    });

    if (this.ciudad && this.pais) {
      this.obtenerClima();
    }
    this.guardarInfo();
  }

  obtenerClima(): void {
    const apiKey = '2068e308184179f56e3fe7fd3d09e2da';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad.nombre}&units=metric&appid=${apiKey}`;

    this.http.get(url).subscribe((data: any) => {
      this.clima = data.main.temp;
    });
  }

  obtenerMonedaLocal(): void {
    if (this.pais.nombre.toLowerCase() === 'inglaterra') {
      this.pais.nombre = 'United Kingdom';
    }
    this.countryService.getCountryByName(this.pais.nombre).subscribe((countryData: any) => {
      if (countryData && countryData[0] && countryData[0].currencies) {
        const currencyCode = Object.keys(countryData[0].currencies)[0];
        this.monedaLocal = currencyCode;
        this.nombreMoneda = countryData[0].currencies[currencyCode].name;
      } else {
        this.monedaLocal = 'USD';
        this.nombreMoneda = 'United States Dollar';
      }
      this.convertirMoneda();
    });
  }

  convertirMoneda(): void {
    const url = `https://api.exchangerate-api.com/v4/latest/COP`;

    this.http.get(url).subscribe((data: any) => {
        this.tasaCambio = data.rates[this.monedaLocal] || data.rates['USD']; // Predeterminado a USD si no se encuentra
        this.conversion = this.presupuesto ? this.presupuesto * this.tasaCambio : null;
    });
  }

  guardarInfo(): void {
    const data = {
      ciudad: this.ciudad,
      presupuesto: this.presupuesto
    };
    this.finPlanService.saveHistorico(data).subscribe(() => {
      console.log('Información guardada en la base de datos');
    });
  }

  volverAPlanDeViaje(): void {
    this.router.navigate(['/']);
  }
}