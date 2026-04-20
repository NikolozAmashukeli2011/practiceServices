import { Component, input } from '@angular/core';
import { Product } from '../services/product-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
productData = input.required<Product>()

showSpiciness() {

return "🔥".repeat(this.productData().spiciness)
}

addToBasket() {

}
}
