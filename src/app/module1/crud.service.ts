import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


export interface form_elements{
  nombre: string,
  descripcion: string,
  precio: number,
  imagen1: Blob
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public URL_create_product: string = 'http://localhost:3000/productos/create'
  public URL_get_all: string = 'http://localhost:3000/productos/'
  public products_all: form_elements[] = []//exportar
  
  

  public myobserver = {
    next: (x:form_elements) => {console.log(x)},
    err: (err:HttpErrorResponse) => {console.log(err)}
  }

  public myobserver_get_all = {
    next: (x:form_elements[]) => {this.products_all = x},
    err: (err:HttpErrorResponse) => {console.log(err)}
  }

  constructor(public http: HttpClient) { //httpclient siempre en el constructor!!
    
  }
  
  create_product(product:form_elements){
    this.http.post<form_elements>(this.URL_create_product,product).subscribe(this.myobserver)
  }

  get_all_products(){
    this.http.get<form_elements[]>(this.URL_get_all).subscribe(obs => this.products_all = obs)
  }

}
