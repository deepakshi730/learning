import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonHomeComponent } from './amazon-home/amazon-home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: '',
    component: AmazonHomeComponent,
    title: 'Amazon'
  },
  {
    path: 'phones', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    title: 'Mobile-Phones'
  },
  {
    path: 'books', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    title: 'Books'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
