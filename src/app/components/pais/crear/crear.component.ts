import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  pais: any = {
    nombre: '',
    codigo_iso: ''
  };

  constructor(private paisService: PaisService, private router: Router) { }

  createPais(): void {
    this.paisService.createPais(this.pais).subscribe(() => {
      this.router.navigate(['/pais/listar']);
    });
  }

  cancel(): void {
    this.router.navigate(['/pais/listar']);
  }
}