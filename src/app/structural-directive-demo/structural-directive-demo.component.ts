import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';

@Component({
  selector: 'app-structural-directive-demo',
  templateUrl: './structural-directive-demo.component.html',
  styleUrls: ['./structural-directive-demo.component.css']
})
export class StructuralDirectiveDemoComponent implements OnInit {

  products: product[] = [];

  constructor() { }

  ngOnInit(): void {
    let prod: product;

    for (let i = 1; i < 6; i++) {
      prod = new product("Product #" + i, i);
      this.products.push(prod);
    }
  }

  checkProductId(id: number) {
    return (id % 2 ? false : true);
  }

}
