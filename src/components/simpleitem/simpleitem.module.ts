import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SimpleitemComponent } from './simpleitem';

@NgModule({
  declarations: [
    SimpleitemComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    SimpleitemComponent
  ]
})
export class SimpleitemComponentModule {}
