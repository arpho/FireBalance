import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateSupplierPage } from './create-supplier';

@NgModule({
  declarations: [
    CreateSupplierPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateSupplierPage),
  ],
  exports: [
    CreateSupplierPage
  ]
})
export class CreateSupplierPageModule {}
