import { ShoppingCart } from '../../pages/listing/listing.model';
import { Component,Input } from '@angular/core';
import {ShoppingCartModel} from '../../pages/shopping-cart/shoppingCart.model'

/**
 * Generated class for the ShoppingCartItemlistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shopping-cart-itemlist',
  templateUrl: 'shopping-cart-itemlist.html'
})
export class ShoppingCartItemlistComponent {

  text: string;
  @Input() shoppingCart:ShoppingCartModel
  constructor(
    @Input() ShoppingCart:ShoppingCartModel
  ) {
    console.log('Hello ShoppingCartItemlistComponent Component');
    this.text = 'Hello World cart item';
  }

}
