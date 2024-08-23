import { Component } from '@angular/core';
import { CiudadService } from 'src/app/services/ciudad/ciudad.service';

@Component({
  selector: 'app-ciudad-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  ciudades: any[] = [];
  paisId: number = 1; // Suponiendo que ya tienes el ID del país

  constructor(private ciudadService: CiudadService) { }

  ngOnInit(): void {
    console.log('ciduad iniciada');
    this.ciudadService.getCiudades().subscribe(data => {
      console.log(data);
      this.ciudades = data;
    });
  }
  onEdit(): void {}

  onDelete(): void {}

}
