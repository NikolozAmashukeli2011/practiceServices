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

const alreadyInBasket = this.Basket.basketItems().find(item => item.id === this.productData().id)

if(alreadyInBasket) {
this.Basket.basketItems.update(currentItems => {
return currentItems.map(item => {

if (item.id === this.productData().id) {
return { ...item, quantity: (item.quantity || 0) + 1 };
}
return item;
});
})
} else {
this.Basket.basketItems.update( currentItems => [
...currentItems,
{...this.productData(), quantity: 1}
])
}


this.Basket.addToBasket(this.productData()).subscribe({
error: (err) => {

Swal.fire({
  icon: "error",
  title:"Sorry, couldn't add that!",
  showConfirmButton: false,
  timer: 1000,
  background: '#1a1a1a',
  color: '#ffffff'
});

this.Basket.basketItems.update(currentItems => {
return currentItems.filter(singleProduct => singleProduct.id !== this.productData().id)
})
}
})
}

removeProductFromBasket() {
Swal.fire({
  position: "top-end",
  icon: "warning",
  title: `${this.productData().name} removed from the basket!`,
  showConfirmButton: false,
  timer: 1000,
  background: '#1a1a1a',
  color: '#ffffff'
});


this.Basket.basketItems.update(allTheProducts => {
return allTheProducts.filter(singleProduct => singleProduct.id !== this.productData().id)
})

this.Basket.removeFromBasket(this.productData().id).subscribe({
error: (err) => {
Swal.fire({
  icon: "error",
  title:"Sorry, couldn't remove that!",
  showConfirmButton: false,
  timer: 1000,
  background: '#1a1a1a',
  color: '#ffffff'
});
this.Basket.basketItems.update(allTheProducts => [...allTheProducts, this.productData()])
}
})
}
}
