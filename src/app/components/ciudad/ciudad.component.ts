import { Component } from '@angular/core';
import { CiudadService } from 'src/app/services/ciudad/ciudad.service';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent {
  ciudades: any[] = [];
  paises: any[] = [];
  selectedPais: any;

  constructor(private paisService: PaisService, private ciudadService: CiudadService) { }

  ngOnInit(): void {
   // this.loadPaises();
  }

  loadPaises(): void {
    this.paisService.getPaises().subscribe(data => {
      this.paises = data;
    });
  }

  // Define la función selectPais
  selectPais(pais: any): void {
    this.selectedPais = pais;
  }

  onUpdateList(): void {
    this.loadPaises();
  }
}