import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';



const routes: Routes = [
  {
    path: '',
    component: MobilePhonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
