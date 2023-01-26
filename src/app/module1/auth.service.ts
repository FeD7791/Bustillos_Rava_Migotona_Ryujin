import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface token_user{
  token:string
}

export interface user_parameters{
  user:string,
  email:string
}



@Injectable({
  providedIn: 'root'
})




export class AuthService {

  
  
  private myobservable$:Observable<token_user> 
  //User parameterss
  public user:user_parameters = {user: 'anonimo', email: ' '}
  
  private myobserver = {
    
    next: (x:token_user) => {return x
      
    }
    
    // err: (err:HttpErrorResponse) => {console.log(err.error())
    // }

    
    
    
  }



  constructor(private cookie:CookieService, private http:HttpClient) {
    
  }

  login(email:string,key:string,URL_login:string){
    this.myobservable$ = this.http.get<token_user>(URL_login) //Set the observable
    this.myobservable$.subscribe(this.myobserver)
   
    
    

  }

  setUser(token:string){
    //todas las cookies llevan por nombre token
    this.cookie.set('token',token,{expires:new Date(new Date().getTime() +  1000*60*60)})//set cookie for 1 hour
    location.reload()//reloads page
  }

  getUserLogged(){//Esta funcion debe implementarse al iniciar cada componente en ngOnInit(){}
    
    
    
    
    if(this.cookie.get('token').length > 0){
      
      const array = this.cookie.get('token').split(".com",2)//get the cookie
      const email = (array[0] + '.com').replace(/%40/g, '@')//get user email from cookie
      const key = (array[1].replace(/%24/g, '$').replace(/%2F/g, '/'))//get user personalized token
      const objeto = [email,key]//create object with parameters 
      const URL = 'http://localhost:3000/validate'//validation route
      this.http.post<user_parameters>(URL,objeto).subscribe( (response:user_parameters)=> {this.user = response} )//observable to trigger validation
    }else{
      //Alguna accion
      console.log('no hay galleta')
    }


  }

  logOut(){
    this.cookie.delete('token')
    location.reload()
  }
  

  

}
