import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCard } from "../product-card/product-card";

@Component({
  selector: 'app-home',
  imports: [ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
private productsService = inject(ProductService)

products = toSignal(this.productsService.getProducts(), { initialValue: []})
}
