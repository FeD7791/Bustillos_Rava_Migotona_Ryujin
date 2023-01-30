import { Component, OnInit } from '@angular/core';
import { CrudService, edit_formbody, form_elements } from '../crud.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  formulario: FormGroup

  public product_id:string |null 
  public product_name:string
  public producto: form_elements

  

  
  constructor(public crud: CrudService, private activatedroute: ActivatedRoute){
    this.formulario = new FormGroup({
      field: new FormControl(),
      new_field_input: new FormControl()

    })
  
}

  edit_onclick(){
    this.formulario.value.id = this.activatedroute.snapshot.paramMap.get('id')
    console.log(this.formulario.value)
    this.crud.edit_one_product(this.formulario.value)

  }

  
  ngOnInit(): void {
    this.product_id = this.activatedroute.snapshot.paramMap.get('id')
    this.crud.get_one_product(this.product_id)

  }
}
