import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { FinPlanComponent } from './components/fin-plan/fin-plan.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { CrearComponent } from './components/pais/crear/crear.component';
import { ListarComponent } from './components/pais/listar/listar.component';
import { PaisComponent } from './components/pais/pais.component';
import { PlanViajeComponent } from './components/plan-viaje/plan-viaje.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';


const routes: Routes = [
  { path: '', redirectTo: '/plan-viaje', pathMatch: 'full' },
  { path: 'pais', component: PaisComponent, children: [
      { path: 'listar', component: ListarComponent },
      { path: 'crear', component: CrearComponent },
    ] 
  },
  { path: 'ciudad', component: CiudadComponent, children: [
      { path: 'listar', component: ListarComponent },
      { path: 'crear', component: CiudadComponent }
    ] 
  },
  { path: 'fin-plan', component: FinPlanComponent },
  { path: 'plan-viaje', component: PlanViajeComponent},
  { path: 'presupuesto', component: PresupuestoComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: '**', redirectTo: '/pais/listar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
