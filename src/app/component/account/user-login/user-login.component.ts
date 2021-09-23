import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css','../account-css.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  success:boolean=false;
  incorrect:boolean=false;
 login(data)
 {
   var userData=JSON.parse(localStorage.getItem('userData'));
   
   if(userData)
   {
   var user =  userData.find(x => x.email == data.email&&x.password==data.pass);
   console.log(user);
   if(user)
   {
     this.success=true;
     this.incorrect=false;
     this.router.navigate(['/user']);
     var currentUser={userId:user.userId,firstName:user.firstName,lastName:user.lastNamename,email:user.email,password:user.password};
     localStorage.setItem('currentUser',JSON.stringify(currentUser));
   }
   else{
     this.success=false;
     this.incorrect=true;
   }
  }
  else
  {
    this.success=false;
    this.incorrect=true;
    
  }

 }

}
