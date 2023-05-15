import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';

const routes: Routes = [
  {
    path: 'descrip',
    component: MobilePhonesComponent
  },
  {
    path: 'lists',
    component: BooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
