import { Component,Input,Output,EventEmitter } from '@angular/core';
import {ItemModel} from '../../pages/shopping-cart/shoppingCart.model';

/**
 * Generated class for the PurchasedItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'purchased-item',
  templateUrl: 'purchased-item.html'
})
export class PurchasedItemComponent {
  @Input() item:ItemModel;
  constructor(
  ) {
    console.log('Hello PurchasedItemComponent Component');
  }

}
