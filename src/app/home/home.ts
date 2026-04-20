import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
private productsService = inject(ProductService)

products = toSignal(this.productsService.getProducts(), { initialValue: []})
}
