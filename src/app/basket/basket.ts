import { Component, inject } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { ProductService } from '../services/product-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-basket',
  imports: [ProductCard, RouterLink],
  templateUrl: './basket.html',
  styleUrl: './basket.scss',
})
export class Basket {
service = inject(ProductService)

basketItems = this.service.basketItems
}
