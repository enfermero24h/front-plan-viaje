import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  @Input() pais: any;
  @Output() update = new EventEmitter<void>();

  constructor(private paisService: PaisService) { }

  save(): void {
    this.paisService.updatePais(this.pais.id, this.pais).subscribe(() => {
      this.update.emit();
    });
  }
}
