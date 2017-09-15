import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SuppliersNameComponent } from './suppliers-name';

@NgModule({
  declarations: [
    SuppliersNameComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SuppliersNameComponent
  ]
})
export class SuppliersNameComponentModule {}
