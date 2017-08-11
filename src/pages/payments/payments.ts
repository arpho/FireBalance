import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { PaymentsModel } from './payments.model';
import { PaymentsService } from './payments.service';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

/**
 * Generated class for the PaymentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage implements OnInit {
  payments:Observable<PaymentsModel>;
  payment:PaymentsModel;
  ngOnInit(){
      this.payments = this.Payments.getPayments();
  }
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private Payments: PaymentsService
    ) {
    this.payment = new PaymentsModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }
  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
