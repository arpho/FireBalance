import { UtilitiesService } from '../../app/utilities.service';
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
    @Input() ShoppingCart:ShoppingCartModel,
    public  utilities:UtilitiesService
  ) {
    this.text = 'Hello World cart item';
  }

  text4Switch() {
    return this.utilities.text4Switch("acquisto onLine", "acquisto tradizionale", this.shoppingCart.online)
  }

  getPrice(){
    const defaultText ='dato non disponibile';
    if (this.shoppingCart.totale && this.shoppingCart.moneta)
      return `${this.shoppingCart.moneta} ${this.shoppingCart.totale}`
    else
      return defaultText;

  }

}
