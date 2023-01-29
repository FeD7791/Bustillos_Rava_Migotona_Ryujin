import { Component } from '@angular/core';
import { FormGroup, FormControl, ControlContainer} from '@angular/forms';
import { CrudService, form_elements } from '../crud.service';




@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  public formulario: FormGroup
  
  
  

  constructor(private crud: CrudService){
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl(),
      imagen1: new FormControl(),
      
    })
    
    
    
    
  }

  
  
  
  onsubmit(){
    
    this.crud.create_product(this.formulario.value)
  }

}
