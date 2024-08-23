import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CiudadService } from 'src/app/services/ciudad/ciudad.service';
import { PaisService } from 'src/app/services/pais/pais.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-plan-viaje',
  templateUrl: './plan-viaje.component.html',
  styleUrls: ['./plan-viaje.component.css']
})
export class PlanViajeComponent implements OnInit {
  paises: any[] = [];
  ciudades: any[] = [];
  selectedPaisId: any | null = null;
  selectedCiudadId: any | null = null;

  currentStep: number = 1;
  totalSteps: number = 3;
  progress: number = 0;

  loading: boolean = false;  // Agregada propiedad de estado de carga

  constructor(
    private paisService: PaisService,
    private ciudadService: CiudadService,
    private router: Router,
    private sharedService: SharedService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.loading = true;  // Mostrar spinner antes de cargar los datos
    this.paisService.getPaises().subscribe(data => {
      this.paises = data;
      this.loading = false;  // Ocultar spinner cuando se carguen los datos
    }, error => {
      this.loading = false;  // Ocultar spinner en caso de error
      console.error(error);
    });
    this.updateProgress();
  }

  onPaisChange(): void {
    if (this.selectedPaisId) {
      this.sharedService.updatePaisId(this.selectedPaisId);
      this.loading = true;  // Mostrar spinner antes de cargar ciudades
      this.ciudadService.getCiudadesByPaisId(this.selectedPaisId.id).subscribe(data => {
        this.ciudades = data;
        this.loading = false;  // Ocultar spinner cuando se carguen las ciudades
      }, error => {
        this.loading = false;  // Ocultar spinner en caso de error
        console.error(error);
      });
    } else {
      this.ciudades = [];
    }
  }

  irAPresupuesto(): void {
    if (this.selectedCiudadId) {
      this.sharedService.updateCiudadId(this.selectedCiudadId);
      this.currentStep++;
      this.updateProgress();
      this.router.navigate(['/presupuesto']);
    }
  }

  irAtras(): void {
    this.router.navigate(['/']); // Ajusta la ruta según el componente anterior
  }

  cambiarIdioma(idioma: string): void {
    this.translateService.use(idioma);
  }

  verHistorial(): void {
    this.router.navigate(['/historico']);
  }

  updateProgress(): void {
    this.progress = (this.currentStep / this.totalSteps) * 100;
  }
}
