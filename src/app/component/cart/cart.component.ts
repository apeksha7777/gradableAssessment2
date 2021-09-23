import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

import { SubjectSubscriber } from 'rxjs/internal/Subject';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public router: Router) { 
    
  }
  
  cartList=[];
  totalBill:number=0;
  noCart=false;
  strikeCheckout:any = null;
  default=1;
  username:string="";
  userId:string="";

  totalBillCal(){
    this.cartList=JSON.parse(localStorage.getItem(this.userId+'_cartList'));
    this.totalBill=0;
    for(var i=0;i<this.cartList.length;i++)
    {
      this.totalBill+=parseInt(this.cartList[i].price)*parseInt(this.cartList[i].quantity);
    }

  }
  showItem(){
    this.cartList=JSON.parse(localStorage.getItem(this.userId+'_cartList'));
    console.log(this.cartList[0])
    if(this.cartList&&this.cartList.length!=0)
    {
      this.noCart=false;
      this.totalBill=0;
      for(var i=0;i<this.cartList.length;i++)
    {
      this.totalBill+=parseInt(this.cartList[i].price)*parseInt(this.cartList[i].quantity);
    }

    }
    else{
      this.noCart=true;

    }
    
  
  }
  ngOnInit(): void {
   
    var user=JSON.parse(localStorage.getItem('currentUser'));
    console.log(user['firstName']);
    this.username=user['firstName'];
    this.userId=user['userId'];
    this.showItem();
    this.stripePaymentGateway();
  }
 changeQuantity(quantity,item){
   console.log(cart,"val")
   console.log(item.id)
   var cart=JSON.parse(localStorage.getItem(this.userId+'_cartList'));
   let index = cart.findIndex(x => x.id == item.id);
   console.log(index,"in");
   item.quantity = quantity;
   cart[index] = item;
   console.log(cart);
  localStorage.setItem(this.userId+'_cartList',JSON.stringify(cart))
  this.totalBillCal();

 }
 userLogout(){
  localStorage.removeItem('currentUser');
   
 }
// redirectPay(){
//   console.log("ddd");
//   //this.router.navigate(['/home']);
//   this.showItem();
//}
  deleteProduct(id){
    console.log(id);
    this.cartList=JSON.parse(localStorage.getItem(this.userId+'_cartList'));
    this.cartList=this.cartList.filter(x=>x.id!=id);
    console.log(this.cartList);
    localStorage.setItem(this.userId+'_cartList',JSON.stringify(this.cartList));
    this.totalBillCal();
    this.showItem();
  }

  checkout(amount,userId,router) {
    
    const strikeCheckout =  (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Jc8eoSChZXLAWtZQhX2hNNqhGXUNQK0udYqXBMmpayUdIdAXMJEVU8IkMs6hiXYltW8DXzJrZcnIc3CsARwJUvA00CL3YY96H',
      locale: 'auto',
      token(stripeToken: any){
        console.log(stripeToken)
        console.log(userId);
        alert('Stripe token generated!');
        var paymentList:[]=JSON.parse(localStorage.getItem(userId+'_cartList'));
        localStorage.setItem(userId+'_paymentList',JSON.stringify(paymentList))
        localStorage.removeItem(userId+'_cartList')
        router.navigate(['/payment'])
        //redirectPay();
        }
     
    });
   

    
   
    strikeCheckout.open({
      name: 'RemoteStack',
      description: 'Payment widgets',
      amount: amount * 100
    });
    console.log(this.userId);
  }
  
  stripePaymentGateway() {
    if(!window.document.getElementById('stripe-script')) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Jc8eoSChZXLAWtZQhX2hNNqhGXUNQK0udYqXBMmpayUdIdAXMJEVU8IkMs6hiXYltW8DXzJrZcnIc3CsARwJUvA00CL3YY96H',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment via stripe successfull!');
           
          }
           
        });
        //
      }
        
      window.document.body.appendChild(scr);
    //  this.router.navigate(['/payment'])
      //this.checkout(20);
    }
  }




}
