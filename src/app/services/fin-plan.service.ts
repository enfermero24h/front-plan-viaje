import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinPlanService {
  private apiUrl = 'http://127.0.0.1:8000/api';  // Reemplaza con la URL real de tu backend

  constructor(private http: HttpClient) { }

  // Obtener la lista de países
  getHistoria(): Observable<any> {
    return this.http.get(`${this.apiUrl}/historial/all`);
  }

  saveHistorico(histori: any): Observable<any> {
    let data={
      ciudad_id: histori.ciudad.id,
      presupuesto_cop: histori.presupuesto
    }
    console.table(data);
    console.log('guardando historico ');
    return this.http.post(`${this.apiUrl}/historial`,data);
  }

}
