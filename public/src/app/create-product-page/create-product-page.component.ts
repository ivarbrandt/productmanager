import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.scss']
})
export class CreateProductPageComponent implements OnInit {
  [x: string]: any;
  products: Product[] = [];
  newProduct: Product = {
    title: '',
    price: 0,
    imageurl: ''
  };

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  createProduct() {
    this.productService.create(this.newProduct).subscribe(data => {
      this.products.push(data);
      this.newProduct = {
        title: '',
        price: 0,
        imageurl: ''
      };
      this.router.navigate(['/products']);
    });
  }


}
