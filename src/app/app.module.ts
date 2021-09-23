import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import {ModalModule} from 'ngx-bootstrap/modal';
import { AdminLoginComponent } from './component/account/admin-login/admin-login.component';

import { UserLoginComponent } from './component/account/user-login/user-login.component';
import { UserRegisterComponent } from './component/account/user-register/user-register.component';
import { PaymentComponent } from './component/payment/payment.component';
import { HomeComponent } from './component/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './component/admin/admin.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AdminPasswordComponent } from './component/admin-password/admin-password.component';
import { UserComponent } from './component/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    AdminLoginComponent,
  
    UserLoginComponent,
    UserRegisterComponent,
    PaymentComponent,
    HomeComponent,
    AdminComponent,
    AddProductComponent,
    AdminPasswordComponent,
    UserComponent,
    
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatDialogModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
