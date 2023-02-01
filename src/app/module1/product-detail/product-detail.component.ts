import { Component, OnInit } from '@angular/core';
import { CrudService, edit_formbody, form_elements } from '../crud.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit  {
  faarrow=faArrowAltCircleLeft
  formulario: FormGroup

  public product_id:string |null 
  public product_name:string
  public producto: form_elements

  

  
  constructor(public crud: CrudService, private activatedroute: ActivatedRoute, private snackbar: MatSnackBar){
    this.formulario = new FormGroup({
      field: new FormControl(),
      new_field_input: new FormControl()

    })
    


  }

  

  edit_onclick(){
    
    if(this.formulario.value.field == null){
      this.snackbar.open('Introducir el campo a modificar', 'Aceptar', {duration: 3000});

    }else if(this.formulario.value.new_field_input == null ){
      this.snackbar.open('Introducir modificacion del campo', 'Aceptar', {duration: 3000});

    }else{
      this.formulario.value.id = this.activatedroute.snapshot.paramMap.get('id')
      this.crud.edit_one_product(this.formulario.value)
      location.reload()
    }
    

  }

  delete_onclick(){
    this.product_id = this.activatedroute.snapshot.paramMap.get('id')
    this.crud.delete_product(this.product_id)
    location.replace('/productlist')

  }

  

  
  ngOnInit(): void {
    this.product_id = this.activatedroute.snapshot.paramMap.get('id')
    this.crud.get_one_product(this.product_id)

  }

  

  
}
