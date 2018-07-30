import { Component, OnInit } from '@angular/core';
import {AnotherProductService} from '../service/another-product.service';
import {Product, ProductService} from '../service/product.service';

@Component({
  selector: 'app-another-product',
  templateUrl: './another-product.component.html',
  styleUrls: ['./another-product.component.css'],
  providers: [
    {
      provide: ProductService, useClass: AnotherProductService
    }
    ]
})
export class AnotherProductComponent implements OnInit {
  public product: Product;

  constructor(private anotherProduct: ProductService) { }

  ngOnInit() {
    this.product = this.anotherProduct.getProduct();
  }

}
