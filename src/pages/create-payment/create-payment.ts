import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the CreatePaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-payment',
  templateUrl: 'create-payment.html',
})
export class CreatePaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public view: ViewController) {
  }

  dismiss() {
    this.view.dismiss();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePaymentPage');
  }

}
