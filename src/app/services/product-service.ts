import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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

@Injectable({
  providedIn: 'root',
})
export class ProductService {
private http = inject(HttpClient)

getProducts(): Observable<Product[]> {
return this.http.get<Product[]>("https://restaurant.stepprojects.ge/api/Products/GetAll")


}

}
