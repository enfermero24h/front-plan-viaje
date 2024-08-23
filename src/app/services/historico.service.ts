import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  private apiUrl = 'http://127.0.0.1:8000/api/historial/all'; // Reemplaza con tu URL de la API

  constructor(private http: HttpClient) {}

  getHistorico(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
