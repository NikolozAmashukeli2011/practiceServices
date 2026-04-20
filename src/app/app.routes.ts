import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Basket } from './basket/basket';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
{
path: "",
component: Home
},

{
path: "basket",
component:Basket
},

{
path: "**",
component: NotFound
},
];
