import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-password',
  templateUrl: './admin-password.component.html',
  styleUrls: ['./admin-password.component.css']
})
export class AdminPasswordComponent implements OnInit {

  constructor() { }
  adminLoggedIn:string=localStorage.getItem('adminLoggedIn');
  passMatch:boolean=true;
  incorrectPass:boolean=false;
  success:boolean=false;
 
  admin:any={
    username:"admin",
    password:""
  }
  ngOnInit(): void {
  }
  adminLogout(){
    localStorage.setItem('adminLoggedIn','false');
   }
   submitPass(data){
     console.log(data.current,data.newPw);
     var admin=JSON.parse(localStorage.getItem('admin'));
     console.log(admin.password,"old")
    
     
      if(data.current!=admin.password)
      {
        this.incorrectPass=true;
        this.success=false;
        this.passMatch=true;
      }
      else if(data.newPw!=data.confirm)
      {
       this.incorrectPass=false;
       this.passMatch=false;
       this.success=false;
 
      }
      else{
       this.admin.password=data.newPw;
       console.log(this.admin);
       localStorage.setItem('admin',JSON.stringify(this.admin));
       this.incorrectPass=false;
       this.passMatch=true;
       this.success=true;
      }

     
     
    
   }


}
