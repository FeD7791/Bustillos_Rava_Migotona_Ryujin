import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
///////////////////// Servicios ////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

///////////////////////Componentes//////////////////////////////////////
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';





@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    
  ],
  providers: [
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [FooterComponent,HeaderComponent]
})
export class Module1Module { }
