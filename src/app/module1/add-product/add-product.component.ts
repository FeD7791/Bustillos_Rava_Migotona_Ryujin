import { Component } from '@angular/core';
import { FormGroup, FormControl, ControlContainer} from '@angular/forms';
import { CrudService, form_elements } from '../crud.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  public formulario: FormGroup
  faarrow=faArrowAltCircleLeft
  
  
  

  constructor(public crud: CrudService, private snackbar: MatSnackBar){
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl(),
      // imagen1: new FormControl(),
      url1: new FormControl(),
      url2: new FormControl(),
      url3: new FormControl(),
    })
    
    
    
    
  }
  
  
  
  
  
  onsubmit(){

    if(this.formulario.value.nombre ==null){
      this.snackbar.open('Introducir un nombre', 'Aceptar', {duration: 3000});

    }else if(this.formulario.value.descripcion ==null){
      this.snackbar.open('Introducir una descripcion', 'Aceptar', {duration: 3000});
    }else if(this.formulario.value.url1 ==null){
      this.snackbar.open('Introducir una url de imagen de producto', 'Aceptar', {duration: 3000});
    }else{
      this.crud.create_product(this.formulario.value)
      this.snackbar.open('Producto agregado', 'Aceptar', {duration: 3000});
      location.replace('/productlist')
    }
    
    
  }

}
