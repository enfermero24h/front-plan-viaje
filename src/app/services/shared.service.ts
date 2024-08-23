// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
    })

    export class SharedService {
        private ciudadIdSubject = new BehaviorSubject<any | null>(null);
        private paisIdSubject = new BehaviorSubject<any | null>(null);
        private presupuesto = new BehaviorSubject<any | null>(null);

        selectedCiudadId$ = this.ciudadIdSubject.asObservable();
        selectedPaisId$ = this.paisIdSubject.asObservable();
        selectedpresupuesto = this.presupuesto.asObservable();

        updatePresupuesto(presupuesto: any | null): void {
            console.log('actualizado updatePresupuesto');
            this.presupuesto.next(presupuesto);
        }

        updateCiudadId(ciudadId: any | null): void {
            console.log('actualizado updateCiudadId');
            this.ciudadIdSubject.next(ciudadId);
        }

        updatePaisId(paisId: any | null): void {
            console.log('actualizado updatePaisId');
            this.paisIdSubject.next(paisId);
        }
    }
