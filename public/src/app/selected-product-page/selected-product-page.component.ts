import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-selected-product-page',
  templateUrl: './selected-product-page.component.html',
  styleUrls: ['./selected-product-page.component.scss']
})
export class SelectedProductPageComponent implements OnInit {

  constructor() { }
  ngOnInit() {

  }

}
