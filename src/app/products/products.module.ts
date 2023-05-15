import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MobilePhonesRoutingModule } from './mobile-phones/mobile-phones-routing.module';
import { MobilePhonesComponent } from './mobile-phones/mobile-phones.component';


import {ButtonComponent} from '@ansys/awc-angular/buttons';
import { IconComponent } from '@ansys/awc-angular/icons';
import { InputComponent } from '@ansys/awc-angular/forms';
import { TooltipComponent } from '@ansys/awc-angular/tooltips';
import { MenuComponent } from '@ansys/awc-angular/menus';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from '@ansys/awc-angular/forms';
import { CardComponent } from '@ansys/awc-angular/panels';
import { ListComponent } from '@ansys/awc-angular/lists';
import { PopoutComponent } from '@ansys/awc-angular/popups';
import { ProductsRoutingModule } from './products-routing.module';
import { BooksComponent } from './books/books.component';



@NgModule({
  declarations: [MobilePhonesComponent, BooksComponent],
  
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ButtonComponent,
    //LogoComponent,
    IconComponent,
    InputComponent,
    TooltipComponent,
    MenuComponent,
    HttpClientModule,
    SelectComponent,
    CardComponent,
    ListComponent,
    PopoutComponent,
  ]
})
export class ProductsModule { }
