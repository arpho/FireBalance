import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FornitoriPage } from './fornitori';

@NgModule({
  declarations: [
    FornitoriPage,
  ],
  imports: [
    IonicPageModule.forChild(FornitoriPage),
  ],
  exports: [
    FornitoriPage
  ]
})
export class FornitoriPageModule {}
