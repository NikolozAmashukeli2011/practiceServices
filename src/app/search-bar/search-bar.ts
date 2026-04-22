import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
service = inject(ProductService)


}
