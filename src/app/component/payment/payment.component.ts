import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  username:string="";
  totalBill=0;
  constructor() { }
  paymentList=[];
   userId:string=""
   ngOnInit() {
    var user=JSON.parse(localStorage.getItem('currentUser'));
    console.log(user['firstName']);
    this.username=user['firstName'];
    this.userId=user['userId'];
    this.paymentList=JSON.parse(localStorage.getItem(this.userId+'_paymentList'))
    console.log(this.paymentList[0])
    this.totalBillCal();
    // this.cartList=JSON.parse(localStorage.getItem(this.userId+'_cartList'));
    // console.log(this.cartList[0])

   
    //this.checkout(20);
  }

  userLogout(){
    localStorage.removeItem('currentUser');
     
   }
   totalBillCal(){
    this.paymentList=JSON.parse(localStorage.getItem(this.userId+'_paymentList'));
    this.totalBill=0;
    for(var i=0;i<this.paymentList.length;i++)
    {
      this.totalBill+=parseInt(this.paymentList[i].price)*parseInt(this.paymentList[i].quantity);
    }

  }


  
  

}
