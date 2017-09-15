import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShoppingCartItemlistComponent } from './shopping-cart-itemlist';

@NgModule({
  declarations: [
    ShoppingCartItemlistComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ShoppingCartItemlistComponent
  ]
})
export class ShoppingCartItemlistComponentModule {}
