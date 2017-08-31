import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SelectableCategoryComponent } from './selectable-category';

@NgModule({
  declarations: [
    SelectableCategoryComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SelectableCategoryComponent
  ]
})
export class SelectableCategoryComponentModule {}
