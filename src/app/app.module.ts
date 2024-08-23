import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { ListarComponent as CiudadListar } from './components/ciudad/listar/listar.component';
import { FinPlanComponent } from './components/fin-plan/fin-plan.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { CrearComponent } from './components/pais/crear/crear.component';
import { EditarComponent } from './components/pais/editar/editar.component';
import { EliminarComponent } from './components/pais/eliminar/eliminar.component';
import { ListarComponent } from './components/pais/listar/listar.component';
import { PaisComponent } from './components/pais/pais.component';
import { PlanViajeComponent } from './components/plan-viaje/plan-viaje.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';

// Función para cargar archivos de traducción
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    ListarComponent,
    EditarComponent,
    EliminarComponent,
    CrearComponent,
    CiudadComponent,
    CiudadListar,
    PlanViajeComponent,
    PresupuestoComponent,
    FinPlanComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
