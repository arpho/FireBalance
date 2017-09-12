import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { ShoppingCartService } from './shopping-cart.service';
import {CreateShoppingCartPage} from '../create-shopping-cart/create-shopping-cart'
import {MdFab} from '@angular/material';

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
export class ShoppingCartPage {

  createCart(){
    let modal = this.modal.create(CreateShoppingCartPage);
    modal.present();
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCartPage');
  }
  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
