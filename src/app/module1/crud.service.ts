import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


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
  public URL_create_product: string = 'http://localhost:3000/productos/create'
  
  
  

  public myobserver = {
    next: (x:form_elements) => {console.log(x)},
    err: (err:HttpErrorResponse) => {console.log(err)}
  }

  constructor(public http: HttpClient) { //httpclient siempre en el constructor!!
    
  }
  
  create_product(product:form_elements){
    this.http.post<form_elements>(this.URL_create_product,product).subscribe(this.myobserver)
  }

}
