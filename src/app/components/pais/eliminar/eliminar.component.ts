import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaisService } from 'src/app/services/pais/pais.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
  @Input() pais: any;
  @Output() deleted = new EventEmitter<void>();

  constructor(private paisService: PaisService) { }

  confirmDelete(): void {
    this.paisService.deletePais(this.pais.id).subscribe(() => {
      this.deleted.emit();
    });
  }

  cancel(): void {
    
  }
}