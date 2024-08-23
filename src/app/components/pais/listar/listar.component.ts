import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  @Input() paises: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  onEdit(pais: any): void {
    this.edit.emit(pais);
  }

  onDelete(pais: any): void {
    this.delete.emit(pais);
  }
}