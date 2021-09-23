import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private shared:SharedService) { }
  productList=[];

  ngOnInit(): void {
    this.showItem();
   
  }
  showItem(){
    this.productList=JSON.parse(localStorage.getItem('productList'));

  }

}
