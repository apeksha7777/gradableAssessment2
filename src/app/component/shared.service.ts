import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  productList=[];
  setMessage(data){
    this.productList=data;
    

  }
  getMessage(){
    return this.productList;
  }
}
