import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css','../account-css.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }
  success:boolean=false;
  ngOnInit(): void {
    this.success=false;
  }
  userData=[];
  userReg(data)
  {

    this.userData=JSON.parse(localStorage.getItem('userData'));
    if(this.userData==null)
    {
      this.userData=[];
    }
    this.userData.push({
      userId:Math.random().toString(36).substr(2, 9),
      firstName:data.fname,
      lastName:data.lname,
      email:data.email,
      password:data.pass

    })
    
    localStorage.setItem('userData',JSON.stringify(this.userData));
    this.success=true


  }
}
