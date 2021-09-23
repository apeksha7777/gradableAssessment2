import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductsComponent } from '../products/products.component';
import { Pipe,PipeTransform } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  adminLoggedIn:string=localStorage.getItem('adminLoggedIn');
  productList=[];
  term;
  noProduct=false;


  ngOnInit(): void {
    this.showItem();
    
   
  }
  showItem(){
    this.productList=JSON.parse(localStorage.getItem('productList'));
    console.log(this.productList)
    if(this.productList==null)
    {
      this.noProduct=true;
    }
    else
    {
      this.noProduct=false;
    }

  }
  deleteProduct(id){
    console.log(id);
    this.productList=JSON.parse(localStorage.getItem('productList'));
    this.productList=this.productList.filter(x=>x.id!=id);
    console.log(this.productList);
   
    localStorage.setItem('productList',JSON.stringify(this.productList));

    var userData=JSON.parse(localStorage.getItem('userData'));
    for(var i=0;i<userData.length;i++)
    {
      console.log(userData[i].userId)
      var cartList=JSON.parse(localStorage.getItem(userData[i].userId+'_cartList'));
      console.log(cartList,'cartList');
      if(cartList)
      {
   
        cartList=cartList.filter(x=>x.id!=id);
        console.log(cartList);
        localStorage.setItem(userData[i].userId+'_cartList',JSON.stringify(cartList));

      }
    }

  }
 adminLogout(){
  localStorage.setItem('adminLoggedIn','false');
 }
 addProduct(){
   const dialogConfig=new MatDialogConfig();
   dialogConfig.disableClose=false;
   dialogConfig.autoFocus=true;
   dialogConfig.width="60%";
   this.dialog.open(AddProductComponent,dialogConfig);
}

}


