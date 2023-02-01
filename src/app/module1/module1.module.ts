import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


////////////////////////Material and Fonts////////////////////////////////////
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';

///////////////////////Componentes//////////////////////////////////////
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ManagerDesktopComponent } from './manager-desktop/manager-desktop.component';

///////////////////// Servicios ////////////////////////////////////////
import { CrudService } from './crud.service';
import { FilterPipe } from './filter.pipe';



const routes: Routes = [
  { path: 'productdetail', component: ProductDetailComponent },
  { path: 'productdetail/:id', component: ProductDetailComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: '', component: ManagerDesktopComponent }
];


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ProductDetailComponent,
    AddProductComponent,
    ProductListComponent,
    FilterPipe,
    ManagerDesktopComponent,
    
  ],
  providers: [
    CrudService
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forRoot(routes),//routes
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule
  ],
  exports: [FooterComponent,HeaderComponent,AddProductComponent,ProductDetailComponent,ProductListComponent,RouterModule,ManagerDesktopComponent]//export routes
})
export class Module1Module { }
