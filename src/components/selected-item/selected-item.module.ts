import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SelectedItemComponent } from './selected-item';

@NgModule({
  declarations: [
    SelectedItemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SelectedItemComponent
  ]
})
export class SelectedItemComponentModule {}
