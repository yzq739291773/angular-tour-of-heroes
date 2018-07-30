import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private logger:LoggerService) { }

  getProduct():Product{
    this.logger.log("logger服务被注入到了product服务");
    return new Product(1,"iphone7",5899,"苹果手机");
  }
}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string
  ){

  }
}
