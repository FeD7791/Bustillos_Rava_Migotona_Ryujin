import { Component, OnInit } from '@angular/core';
import { CrudService, form_elements } from '../crud.service';






@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

  searchText:any
  constructor(public crud:CrudService){}
  displayedColumns: string[] = ['id' ,'nombre', 'descripcion', 'precio', 'createdAt'];

  
  

  
  ngOnInit(): void {
    
    this.crud.get_all_products()

    
    
  }
}



