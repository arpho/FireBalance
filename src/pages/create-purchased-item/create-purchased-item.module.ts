import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePurchasedItemPage } from './create-purchased-item';

@NgModule({
  declarations: [
    CreatePurchasedItemPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePurchasedItemPage),
  ],
  exports: [
    CreatePurchasedItemPage
  ]
})
export class CreatePurchasedItemPageModule {}
