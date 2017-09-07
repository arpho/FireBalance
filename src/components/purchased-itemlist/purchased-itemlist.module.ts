import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PurchasedItemlistComponent } from './purchased-itemlist';

@NgModule({
  declarations: [
    PurchasedItemlistComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PurchasedItemlistComponent
  ]
})
export class PurchasedItemlistComponentModule {}
