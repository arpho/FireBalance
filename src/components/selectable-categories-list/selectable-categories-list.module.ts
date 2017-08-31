import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SelectableCategoriesListComponent } from './selectable-categories-list';

@NgModule({
  declarations: [
    SelectableCategoriesListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SelectableCategoriesListComponent
  ]
})
export class SelectableCategoriesListComponentModule {}
