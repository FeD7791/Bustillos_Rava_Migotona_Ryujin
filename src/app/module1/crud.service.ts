import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';




export interface form_elements{
  id?: number,
  nombre?: string,
  descripcion?: string,
  precio?: string,
  imagen1?: any,
  createdAt?: Date,
  updatedAt?: Date,
  parsed_image?: string |ArrayBuffer |null
  url1?:string,
  url2?:string,
  url3?:string,
}

export interface edit_formbody{
  id: string,
  parameter: string,
  edited_parameter: string
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public URL_create_product: string = 'http://localhost:3000/productos/create'
  public URL_get_all: string = 'http://localhost:3000/productos/'
  public products_all: form_elements[] = []
  public one_product: form_elements = {nombre:'N/A',descripcion:'N/A',precio:'N/A'}
  

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
  
  URL_builder(id:string | null){
   return ('http://localhost:3000/productos/' +id)
  }

  

_arrayBufferToBase64( buffer:any ) {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return btoa( binary );
}

  blob_image_parser(image:any){
    
    const imagep = this._arrayBufferToBase64(image)
    // let imagennnn = new Blob ([ new Uint8Array(image)])
    let imagennnn = new Blob (image)
    let reader = new FileReader()
    console.log(imagennnn)
    // return this._arrayBufferToBase64(image)
    reader.readAsDataURL(imagennnn)
    console.log(reader.result)
    return reader.result
    

  }

  get_one_product(id:string | null){

    const URL = this.URL_builder(id)
    this.http.get<form_elements>(URL).subscribe(obs => {this.one_product = obs
      
    // this.one_product.parsed_image = this.blob_image_parser(this.one_product.imagen1.data)
    
  })
    
  }

  edit_one_product(body:edit_formbody){
    const URL = 'http://localhost:3000/productos/update'
    this.http.post<edit_formbody>(URL,body).subscribe(obs =>{console.log(obs)})

    
  }

  

}
