import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<AddProductComponent>,private shared:SharedService) { }

  ngOnInit(): void {

    //localStorage.setItem('productList',JSON.stringify(this.prodList));
  }
  product:any={
    id:"",
    name:"",
    price:0,
    weight:"",
    imgUrl:"",
    
  }
 prodList=[];
 getProd=[];
 
 //https://www.chatelaine.com/wp-content/uploads/2018/08/types-of-onions.jpg

submitProduct(productData){
  this.product.id= Math.random().toString(36).substr(2, 9);
  this.product.name=productData.name;
  this.product.price=parseInt(productData.price);
  this.product.weight=productData.weight;
  this.product.imgUrl=productData.imgUrl;
  //this.prodList.push(this.product);
  
  this.prodList=JSON.parse(localStorage.getItem('productList'));
  //console.log(this.prodList); 
  if(this.prodList==null)
  {
    this.prodList=[];
  }
 
  this.prodList.push(this.product)
 
  //this.shared.setMessage(this.prodList);

  localStorage.setItem('productList',JSON.stringify(this.prodList));
  this.prodList=JSON.parse(localStorage.getItem('productList'));

  

  console.log(this.prodList);
  this.dialogRef.close();
}

}
