import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  products: Product[] = [];
  newProduct: Product = {
    title: '',
    price: 0,
    imageurl: ''
  };
  selectedProduct: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.getAllProducts();
    // this.newProduct = {title: '', price: 0, imageurl: ''};
  }

  getAllProducts() {
    this.productService.index().subscribe(data => {
      this.products = data;
    });
  }
  getOneProduct(id: string) {
    this.productService.find(id).subscribe(data => {
      this.selectedProduct = data;
    });
  }




}








