import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './products/products.module';

import { ProductComponent } from './product/product.component';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    ProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
