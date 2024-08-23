import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent implements OnInit {
  presupuesto: any;

  currentStep: number = 2;
  totalSteps: number = 3;
  progress: number = 0;

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.updateProgress();
  }

  irAFinPlan(form: NgForm): void {
    if (form.valid) {
      if (this.presupuesto !== null) {
        this.sharedService.updatePresupuesto(this.presupuesto);
        this.currentStep++;
        this.updateProgress();
        this.router.navigate(['/fin-plan']);
      }
    } else {
      form.control.markAllAsTouched(); // Marca todos los campos para mostrar los errores
    }
  }

  updateProgress(): void {
    this.progress = (this.currentStep / this.totalSteps) * 100;
  }


  irAtras(): void {
    this.router.navigate(['/']); // Ajusta la ruta según el componente anterior
  }

}
