import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { SearchBar } from "../search-bar/search-bar";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, SearchBar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
