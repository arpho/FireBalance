import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShoppingCartListComponent } from './shopping-cart-list';

@NgModule({
  declarations: [
    ShoppingCartListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ShoppingCartListComponent
  ]
})
export class ShoppingCartListComponentModule {}
