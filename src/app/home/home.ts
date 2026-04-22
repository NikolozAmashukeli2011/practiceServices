import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCard } from "../product-card/product-card";
import { SearchBar } from "../search-bar/search-bar";

@Component({
  selector: 'app-home',
  imports: [ProductCard, SearchBar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
 productsService = inject(ProductService)

products = toSignal(this.productsService.getProducts(), { initialValue: []})
}
