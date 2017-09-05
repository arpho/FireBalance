import { DateTime } from 'ionic-angular/umd';
import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MdNativeDateModule, MdDatepicker, MdDatepickerToggle } from '@angular/material';

/**
 * Generated class for the CreateShoppingCartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-shopping-cart',
  templateUrl: 'create-shopping-cart.html',
})
export class CreateShoppingCartPage implements OnInit {
  date;
  
  ngOnInit(){
    this.date = new Date();
  }
  title: string;
  mydate: DateTime;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController) {
    this.title = navParams.get('key') ? "modifica carrello della spesa" : "Nuovo Carrello della spesa"
  }
  dismiss() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateShoppingCartPage');
  }

}
