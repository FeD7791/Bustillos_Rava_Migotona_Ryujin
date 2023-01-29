import { Component, OnInit } from '@angular/core';
import { CrudService, form_elements } from '../crud.service';



export interface todos_los_productos{
  id:number
  nombre: string,
  descripcion: string,
  precio: string,
  imagen1: Blob,
  createdAt: Date,
  updatedAt: Date,
  
}



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

  
  constructor(private crud:CrudService){}
  displayedColumns: string[] = ['id' ,'nombre', 'descripcion', 'precio', 'createdAt'];

  array:todos_los_productos[]=[]
  

  
  ngOnInit(): void {
    this.crud.http.get<todos_los_productos[]>(this.crud.URL_get_all).subscribe(obs=>{this.array = obs
      console.log(obs)})
    
    
  }
}



