import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit  {
  paises: any[] = [];
  selectedPais: any;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.loadPaises();
  }

  loadPaises(): void {
    console.log('listamos paises ');
    this.paisService.getPaises().subscribe(data => {
      console.log(data);
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