import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'ms-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}
