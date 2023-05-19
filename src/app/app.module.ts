import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
import { AppComponent } from './app.component';
import { AmazonHeaderComponent } from './amazon-header/amazon-header.component';

import {ButtonComponent} from '@ansys/awc-angular/buttons';
import { IconComponent } from '@ansys/awc-angular/icons';
import { InputComponent } from '@ansys/awc-angular/forms';
import { TooltipComponent } from '@ansys/awc-angular/tooltips';
import { MenuComponent } from '@ansys/awc-angular/menus';
import { MobilePhonesComponent } from './products/mobile-phones/mobile-phones.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from '@ansys/awc-angular/forms';
import { CardComponent } from '@ansys/awc-angular/panels';
import { ListComponent } from '@ansys/awc-angular/lists';
import { PopoutComponent } from '@ansys/awc-angular/popups';
import { AmazonHomeComponent } from './amazon-home/amazon-home.component';
//import { LogoComponent } from '@ansys/awc-angular/image';
import {ImageComponent} from '@ansys/awc-angular/image';

@NgModule({
  declarations: [
    AppComponent,
    AmazonHeaderComponent,
    AmazonHomeComponent,
    //MobilePhonesComponent,
    
  ],
  imports: [
    ProductsModule,
    BrowserModule,
    AppRoutingModule,
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
    ImageComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
