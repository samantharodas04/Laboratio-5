import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorListService {
  private colores: string[] = [];

  agregarColor(color: string) {
    this.colores.push(color);
  }

  obtenerColores() {
    return this.colores;
  }
}
