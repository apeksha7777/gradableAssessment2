import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

constructor() { }
username:string="";
userId:string="";
productList=[];
cartNumber:number;
cartList=[];
noProduct=false;

term;
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
    var user=JSON.parse(localStorage.getItem('currentUser'));
    console.log(user['firstName']);
    this.username=user['firstName'];
    this.userId=user['userId'];
    this.showItem();
   // localStorage.removeItem('cartList')
    this.cartList=JSON.parse(localStorage.getItem(this.userId+'_cartList'));
    if(this.cartList==null)
    {
      this.cartList=[];
    }
    this.cartNumber=this.cartList.length;
    console.log(this.cartList,this.cartNumber);
    

  }
userLogout(){
 localStorage.removeItem('currentUser');
  
}
addToCart(id,name,price,weight,imgUrl){
 
  this.cartList=JSON.parse(localStorage.getItem(this.userId+'_cartList'));
  if(this.cartList==null)
  {
    this.cartList=[];
  }
  var item=this.cartList.find(x=>x.id==id);
  if(item)
  {
    alert("Item already added");
  }
  else
  {
  this.cartList.push({id:id,imgUrl:imgUrl,name:name,price:price,weight:weight,quantity:1})
  localStorage.setItem(this.userId+'_cartList',JSON.stringify(this.cartList));
  this.cartNumber=this.cartList.length;
  console.log(this.cartList.length,"len");
  }



}

}
