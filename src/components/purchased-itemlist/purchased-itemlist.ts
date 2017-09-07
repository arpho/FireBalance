import { Component,Input,Output,EventEmitter } from '@angular/core';
import {ItemModel} from '../../pages/shopping-cart/shoppingCart.model';

/**
 * Generated class for the PurchasedItemlistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'purchased-itemlist',
  templateUrl: 'purchased-itemlist.html'
})
export class PurchasedItemlistComponent {
  @Input()items:[ItemModel];
  text: string;

  constructor() {
    console.log('Hello PurchasedItemlistComponent Component');
    this.text = 'Hello World';
  }

}
