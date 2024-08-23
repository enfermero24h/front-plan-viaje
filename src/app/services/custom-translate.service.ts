import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateService {
  private translations: { [key: string]: any } = {};

  constructor(private http: HttpClient) {}

  loadTranslations(lang: string): Observable<any> {
    const url = `./assets/i18n/${lang}.json`;
    return this.http.get(url).pipe(
      map((translations) => {
        this.translations[lang] = translations;
        return translations;
      }),
      catchError(() => {
        console.error(`Error loading translation file for ${lang}`);
        return of({});
      })
    );
  }

  getTranslation(key: string, lang: string): string {
    return this.translations[lang]?.[key] || key;
  }
}
