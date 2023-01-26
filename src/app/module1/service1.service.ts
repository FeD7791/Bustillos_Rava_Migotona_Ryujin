
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { body } from 'express-validator';
import { Observable } from 'rxjs';




export interface form_elements{ //Interface para los imputs del formulario
  name: string,
  lastname: string,
  email: string,
  bdate: Date,
  key: string

}

export interface user_database_table {
  id: number,
  name: string,
  lastname: string,
  email: string,
  bdate: string,
  key?: string,
  createdAt?: string,
  updatedAt?: string

}

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  
  public URL: string
  public URL_all_users: string
  
  
  observer = {
    next: (x:form_elements) => {console.log("formulario enviado " + x)}
  }
  

  
  constructor() {

    

    this.URL = 'http://localhost:3000/register'
    this.URL_all_users = 'http://localhost:3000/usuarios/'
    
    

  }
}
