import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-clima-presupuesto';

  constructor(private translateService: TranslateService) {
    // Establecer el idioma predeterminado
    this.translateService.setDefaultLang('es');
  }

  cambiarIdioma(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const idioma = target?.value;
  
    if (idioma) {
      this.translateService.use(idioma);
    }
  }
  
}
