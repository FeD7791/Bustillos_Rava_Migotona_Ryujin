import { Component, OnInit } from '@angular/core';
import { faFacebook,faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormControl} from '@angular/forms';
import { Service1Service, form_elements } from '../service1.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { header } from 'express-validator/src/middlewares/validation-chain-builders';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  fafacebook = faFacebook
  fagoogle = faGoogle
  formulario: FormGroup
  

  
  

  constructor(private service1: Service1Service, private http: HttpClient){ //No olvidar importar el modulo httpclient en el modulo1
    this.formulario = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      bdate: new FormControl(),
      key: new FormControl()
    })
    
    
    
    
  }
  
  onsubmit(){

    this.http.post<form_elements>(this.service1.URL,this.formulario.value).subscribe(this.service1.observer)
    // aca this.http.post<form_elements>(this.service1.URL,this.formulario.value) es un objservable
    // es necesario suscribirse al mismo para poder postear los datos
    // console.log(this.service1.URL)
    // console.log(this.formulario.value)
  }
  

  ngOnInit(): void {
    
  }

}
