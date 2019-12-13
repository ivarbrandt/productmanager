import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-list-product-page',
  templateUrl: './list-product-page.component.html',
  styleUrls: ['./list-product-page.component.scss']
})
export class ListProductPageComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.index().subscribe(data => {
      this.products = data;
    });
  }

  deleteProduct(id: string, index: number) {
    this.productService.delete(id).subscribe();
    this.products.splice(index, 1);
  }

}
