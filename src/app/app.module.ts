import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HardwareComponentsComponent } from './hardware-components/hardware-components.component';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { InputQuantityIntegerComponent } from './input-quantity-integer/input-quantity-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HardwareComponentsComponent,
    CartComponent,
    StoreComponent,
    InputQuantityIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
