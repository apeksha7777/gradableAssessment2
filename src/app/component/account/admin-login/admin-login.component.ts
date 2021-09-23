import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { Console } from 'console';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css','../account-css.css']
})
export class AdminLoginComponent implements OnInit {

  admin:any={
    username:"",
    password:""
 }
 errorMsg:boolean=false;

 adminLogin(){
   var admin=JSON.parse(localStorage.getItem('admin'));
   console.log(admin.password);
   if(this.admin.username=="admin"&&this.admin.password==admin.password)
   {
     console.log("successfull login");
     localStorage.setItem('adminLoggedIn','true');
     this.errorMsg=false;

     this.router.navigate(['/admin'])
   }
   else{
     console.log("unsuccessful");
     localStorage.setItem('adminLoggedIn','false');
     this.errorMsg=true;
   }
 }

   constructor(private router: Router){};

  ngOnInit(): void {
    if(localStorage.getItem('admin')==null)
    {
      var admin={username:'admin',password:'pass'}
      localStorage.setItem('admin',JSON.stringify(admin));
    }
  }

}
