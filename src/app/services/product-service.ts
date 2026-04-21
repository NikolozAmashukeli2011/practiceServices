import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface Product {
  "id": number,
  "name": string,
  "price": number,
  "nuts": boolean,
  "image": string,
  "vegeterian":boolean,
  "spiciness": number,
  "categoryId": number
}

export interface postBody {
quantity: number,
price: number,
productId: number
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
private http = inject(HttpClient)

getProducts(): Observable<Product[]> {
return this.http.get<Product[]>("https://restaurant.stepprojects.ge/api/Products/GetAll")
}

basketItems = signal<Product[]>([])

addToBasket(product: Product): Observable<postBody> {
const postObject =  {
 quantity: 1,
 price: product.price,
 productId: product.id
}

return this.http.post<postBody>("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", postObject)

}

removeFromBasket(id: number) {
this.basketItems.update(items => items.filter(i => i.id !== id))
}
}
