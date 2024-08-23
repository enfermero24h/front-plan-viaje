import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'http://127.0.0.1:8000/api';  // Reemplaza con la URL real de tu backend

  constructor(private http: HttpClient) { }

  // Obtener la lista de países
  getPaises(): Observable<any> {
    return this.http.get(`${this.apiUrl}/paises`);
  }

  // Obtener un país por ID
  getPais(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/paises/${id}`);
  }

  // Obtener las ciudades de un país específico
  getCiudadesByPaisId(paisId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/paises/${paisId}/ciudades`);
  }

  // Crear un nuevo país
  createPais(pais: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/paises`, pais);
  }

  // Actualizar un país existente
  updatePais(id: number, pais: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/paises/${id}`, pais);
  }

  // Eliminar un país por ID
  deletePais(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/paises/${id}`);
  }
}
