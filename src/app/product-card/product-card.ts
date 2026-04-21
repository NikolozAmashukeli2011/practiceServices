import { ProductService } from './../services/product-service';
import { Component, inject, input, output, signal } from '@angular/core';
import { Product } from '../services/product-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
productData = input.required<Product>()
productObject = output<Product>()
Basket = inject(ProductService)

isCartMode = input<boolean>(false)

showSpiciness() {
return "🔥".repeat(this.productData().spiciness)
}

putInBasket() {
Swal.fire({
  position: "top-end",
  icon: "success",
  title:`${this.productData().name} added to the basket!`,
  showConfirmButton: false,
  timer: 1000,
  background: '#1a1a1a',
  color: '#ffffff'
})

this.Basket.basketItems.update(currentItems => [...currentItems, this.productData()])
this.Basket.addToBasket(this.productData()).subscribe()
}

removeProductFromBasket() {
Swal.fire({
  position: "top-end",
  icon: "warning",
  title: `${this.productData().name} removed from the basket!`,
  showConfirmButton: false,
  timer: 1500,
  background: '#1a1a1a',
  color: '#ffffff'
});

this.Basket.removeFromBasket(this.productData().id).subscribe(() => {
this.Basket.basketItems.update(allTheProducts => {
return allTheProducts.filter(singleProduct => singleProduct.id !== this.productData().id)
})
})
}

}
