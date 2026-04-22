import { Component, inject } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { ProductService } from '../services/product-service';
import { RouterLink } from "@angular/router";
import { SearchBar } from "../search-bar/search-bar";

@Component({
  selector: 'app-basket',
  imports: [ProductCard, RouterLink, SearchBar],
  templateUrl: './basket.html',
  styleUrl: './basket.scss',
})
export class Basket {
service = inject(ProductService)

basketItems = this.service.basketItems

totalPrice() {
let total = 0

const items = this.basketItems()

for(let item of items) {
total += item.price * (item.quantity || 1)
}

return total
}


}
