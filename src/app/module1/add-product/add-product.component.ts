import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  formulario: FormGroup

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

}
