import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
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
      url1: new FormControl(),
      url2: new FormControl(),
      url3: new FormControl()
    })
  }

  onsubmit(){
    // console.log(this.formulario.value)
    // this.crud.http.post<form_elements>(this.crud.URL_create_product,this.formulario.value).subscribe(this.crud.myobserver)
    this.crud.create_product(this.formulario.value)
  }

}
