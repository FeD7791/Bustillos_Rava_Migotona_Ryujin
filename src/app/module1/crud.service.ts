import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';




export interface form_elements{
  id?: number,
  nombre: string,
  descripcion: string,
  precio: string,
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
  
  alpha$:BehaviorSubject<form_elements[]> =new BehaviorSubject<form_elements[]>([])
  
  

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

    this.http.get<form_elements[]>(this.URL_get_all).subscribe(obs => {
      this.alpha$.next(obs)
    })

  }
  

  filter_products(key:string){
    let reg = new RegExp(key)
    console.log(key)
    let new_obs:form_elements[]=[]
    
    this.alpha$.subscribe(obs =>{
        
      obs.forEach(a =>{
        
        
        
        
        if(reg.test(a.nombre.toLowerCase()) && new_obs.length < obs.length){
          
          new_obs.push(a)
        }
        })
        
        
        this.products_all = new_obs
        



    })
   
    
    
    
    
    
      
      

    
    
    
  }
  
  URL_builder(id:string | null){
   return ('http://localhost:3000/productos/' +id)
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

  delete_product(id:string | null){
    const URL = this.URL_builder(id)
    this.http.delete<form_elements>(URL).subscribe(obs => {this.one_product = obs
      
      
    })
  }

  go_to_productlist(){
    location.replace('/productlist')
  }

  go_to_addproduct(){
    location.replace('/addproduct')
  }

  go_to_manager_desktop(){
    location.replace('/')
  }

}
