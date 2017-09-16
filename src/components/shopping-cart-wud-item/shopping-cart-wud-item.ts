import { Component } from '@angular/core';
import { ShoppingCartService } from '../../pages/shopping-cart/shopping-cart.service'

/**
 * Generated class for the ShoppingCartWudItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'shopping-cart-wud-item',
  templateUrl: 'shopping-cart-wud-item.html'
})
export class ShoppingCartWudItemComponent {


  constructor(private Acquisti: ShoppingCartService) {
  }

  update(supplier) {
    this.Acquisti.updateShoppingCart(supplier);

  }
  trash(supplier, key) {
    this.Acquisti.trashShoppingCart(supplier, key);

  }

}
