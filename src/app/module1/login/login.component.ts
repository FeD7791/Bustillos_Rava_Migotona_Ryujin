import { Component, OnInit } from '@angular/core';
import { AuthService, token_user } from '../auth.service';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {
  
  //font awesome
  fafacebook = faFacebook
  fagoogle = faGoogle


  login_form: FormGroup
  URL_login:string
  email_user:string
  key_user:string

  token_obj:string
  

  

  
  

  constructor(public auth:AuthService, private http:HttpClient){
    this.login_form = new FormGroup({
      email: new FormControl(),
      key: new FormControl()
    })

    
  }

  

  url_builder(){
    const email = this.login_form.controls['email'].value
    const key = this.login_form.controls['key'].value
    const URL ='http://localhost:3000/usuarios/'+email+'/'+key
    return {email,key,URL}
  }

  button_login_trigger(){
    




    this.URL_login = this.url_builder().URL
    this.email_user = this.url_builder().email
    this.key_user = this.url_builder().key
    
    this.http.get<token_user>(this.URL_login).subscribe((obser)=>{this.token_obj = obser.token
    this.auth.setUser(this.email_user+obser.token)
    })
    
    
    
  }

  

  
  

  ngOnInit(): void {
    this.auth.getUserLogged()
  }

}
