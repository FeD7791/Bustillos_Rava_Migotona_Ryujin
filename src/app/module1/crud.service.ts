import { Injectable } from '@angular/core';

export interface form_elements{
  nombre: string,
  descripcion: string,
  precio: number,
  url1: string,
  url2: string,
  url3: string
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private URL_create_product: string = 'http://localhost:3000/productos/create'

  constructor() { }
}
