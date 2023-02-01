import { Component, OnInit,ViewChild } from '@angular/core';
import { CrudService, form_elements } from '../crud.service';
import { MatPaginator } from '@angular/material/paginator';









@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

  

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  searchText:any
  constructor(public crud:CrudService){
    
  }
  displayedColumns: string[] = ['id' ,'nombre', 'descripcion', 'precio', 'createdAt', 'accion'];
  

  
 
  

  
  ngOnInit(): void {
    
    this.crud.get_all_products()
    //Paginator
    this.crud.http.get<form_elements[]>(this.crud.URL_get_all).subscribe(obs => {
      this.crud.products_all.paginator =this.paginator
    })

    
    
    
    
    

    
    
  }
}



