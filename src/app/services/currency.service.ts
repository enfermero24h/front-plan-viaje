import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1/name/';

  constructor(private http: HttpClient) {}

  getCountryByName(countryName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${countryName}`);
  }
}
