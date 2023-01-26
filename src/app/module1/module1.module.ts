import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
///////////////////// Servicios ////////////////////////////////////////
import { Service1Service } from './service1.service';
import { AuthService } from './auth.service';


////////////////////////////////////////////////////////////////////////
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';


///////////////////////Componentes//////////////////////////////////////
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component'; 




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CreateAccountComponent,
    DisplayComponent,
    LoginComponent
  ],
  providers: [
    Service1Service,
    AuthService
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [FooterComponent,HeaderComponent,CreateAccountComponent,DisplayComponent, LoginComponent]
})
export class Module1Module { }
