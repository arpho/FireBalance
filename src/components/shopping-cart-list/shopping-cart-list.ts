import { ShoppingCartService } from '../../pages/shopping-cart/shopping-cart.service';

import { Component, Input, Output } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, AlertController } from 'ionic-angular';
import { ShoppingCart } from '../../pages/listing/listing.model';
import { CreateShoppingCartPage } from '../../pages/create-shopping-cart/create-shopping-cart';
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

  open(ShoppingCart) {
    console.log('open', ShoppingCart);
  }
  swiped(it) {
    console.log('swiped', it)
  }
  trash(item) {
    let alert = this.alertCtrl.create({
      title: "sei sicuro di voler cancellare questo carrello?",
      buttons: [
        {
          text: "si cancella",
          handler: () => {
            this.ShoppingCartService.trashShoppingCart(item, item.$key).then(d => {
              console.log('trashed', d)
            })
          }
        },
        {
          text: "Annulla",
          role: "cancel",
          handler: () => {
            console.log('annullato');
          }
        }
      ]
    })
    alert.present();
  }

  edit(item) {
    console.log('favorite', item);
    let modal = this.modal.create(CreateShoppingCartPage, item)
    modal.present();
  }


  constructor(
    public modal: ModalController,
    public ShoppingCartService: ShoppingCartService,
    public alertCtrl: AlertController,
  ) {
  }

}
