import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductService{

  constructor() { }

  getProduct(): Product1 {
    return new Product1(2,"三星7", 4899, "三星手机");
  }
}


class Product1 {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string
  ){

  }
}
