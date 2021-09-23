import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './component/account/admin-login/admin-login.component';

import { UserLoginComponent } from './component/account/user-login/user-login.component';
import { UserRegisterComponent } from './component/account/user-register/user-register.component';
import { AdminPasswordComponent } from './component/admin-password/admin-password.component';
import { AdminComponent } from './component/admin/admin.component';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { PaymentComponent } from './component/payment/payment.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  {path:'userLogin',component: UserLoginComponent  },
  {path:'userRegister',component: UserRegisterComponent  },
  {path:'adminLogin',component: AdminLoginComponent  },
  {path:'cart',component:CartComponent},
  {path:'admin',component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'password',component:AdminPasswordComponent},
  {path:'user',component:UserComponent},
  {path:'payment',component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
export const routingComponents=[UserLoginComponent,UserRegisterComponent,AdminLoginComponent]