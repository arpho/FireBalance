import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PurchasedItemComponent } from './purchased-item';

@NgModule({
  declarations: [
    PurchasedItemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    PurchasedItemComponent
  ]
})
export class PurchasedItemComponentModule {}
