
import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ShoppingCartModel } from '../../pages/shopping-cart/shoppingCart.model'

/**
 * Generated class for the ShoppingCartListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shopping-cart-list',
  templateUrl: 'shopping-cart-list.html'
})
export class ShoppingCartListComponent {
  @Input() ShoppingCarts: Observable<[ShoppingCartModel]>

  constructor() {
    console.log('Hello ShoppingCartListComponent Component');
  }

}
