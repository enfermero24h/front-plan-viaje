import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private apiUrl = 'http://127.0.0.1:8000/api';  // Reemplaza con la URL real de tu backend

  constructor(private http: HttpClient) { }

  //obtener la lista de cidudes all 
  getCiudades(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ciudades/all`);
  }

  // Obtener la lista de ciudades de un país específico
  getCiudadesByPaisId(paisId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/paises/${paisId}/ciudades`);
  }

  // Obtener una ciudad por ID
  getCiudad(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/ciudades/${id}`);
  }

  // Crear una nueva ciudad
  createCiudad(ciudad: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ciudades`, ciudad);
  }

  // Actualizar una ciudad existente
  updateCiudad(id: number, ciudad: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/ciudades/${id}`, ciudad);
  }

  // Eliminar una ciudad por ID
  deleteCiudad(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/ciudades/${id}`);
  }

  // Obtener el historial de una ciudad específica
  getHistorialByCiudadId(ciudadId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/ciudades/${ciudadId}/historial`);
  }
}
