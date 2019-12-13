import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<Product[]>('/api/products');
  }
  find(id: string) {
    return this.http.get<Product>(`/api/products/${id}`);
  }
  update(product: Product) {
    console.log(product);
    return this.http.put<Product>(`/api/products/${product._id}`, product);
  }
  create(product: Product) {
    return this.http.post<Product>('/api/products', product);
  }
  delete(id: string) {
    return this.http.delete(`/api/products/${id}`);
  }
}
