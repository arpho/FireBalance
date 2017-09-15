import { ShoppingCartModel } from './shoppingCart.model';
import { ShoppingCart } from '../listing/listing.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MdFab } from '@angular/material';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { ShoppingCartService } from './shopping-cart.service';
import { CreateShoppingCartPage } from '../create-shopping-cart/create-shopping-cart'

/**shopping-cart
 * Generated class for the ShoppingCartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shopping-cart',
  templateUrl: 'shopping-cart.html'
})
export class ShoppingCartPage implements OnInit {
  ShoppingCarts: Observable<ShoppingCartModel>;
  createCart() {
    let modal = this.modal.create(CreateShoppingCartPage);
    modal.present();
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public ShoppingCartsService: ShoppingCartService,
    public modal: ModalController) {
    console.log('shopping cart');
  }

  ngOnInit() {
    this.ShoppingCarts = this.ShoppingCartsService.getShoppingCarts()
    console.log(this.ShoppingCarts,'shpping')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCartPage');
  }
  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
