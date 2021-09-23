import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showModal:boolean=false;
  registerForm:FormGroup;
  submitted=false;
  term;
  noProduct=false;
  constructor(private router: Router) { 
    
  }
  productList=[];
  
  showItem(){
    this.productList=JSON.parse(localStorage.getItem('productList'));
    if(this.productList==null)
    {
      this.noProduct=true;
    }
    else
    {
      this.noProduct=false;
    }

  }

  ngOnInit(): void {
    this.showItem();
    
  if(localStorage.getItem('adminLoggedIn')=='true')
  {
    this.router.navigate(['/admin']);
  }
  if(localStorage.getItem('currentUser')!=null)
  {
    this.router.navigate(['/user']);
  }
  
  

  }

}
