import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.interface';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.scss']
})
export class EditProductPageComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }
  products: Product[] = [];
  selectedProduct: Product;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productService.find(params.id).subscribe(data => {
        this.selectedProduct = data;
      });
    });
  }

  updateProduct() {
    this.productService.update(this.selectedProduct).subscribe(data => {
      const index = this.products.findIndex(product => product._id === this.selectedProduct._id);
      this.products[index] = this.selectedProduct;
      this.router.navigate(['/products']);
    });
  }

}
