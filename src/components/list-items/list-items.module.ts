import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListItemsComponent } from './list-items';

@NgModule({
  declarations: [
    ListItemsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListItemsComponent
  ]
})
export class ListItemsComponentModule {}
