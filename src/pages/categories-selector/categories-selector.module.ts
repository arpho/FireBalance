import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriesSelectorPage } from './categories-selector';

@NgModule({
  declarations: [
    CategoriesSelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriesSelectorPage),
  ],
  exports: [
    CategoriesSelectorPage
  ]
})
export class CategoriesSelectorPageModule {}
