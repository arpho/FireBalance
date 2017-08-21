import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
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
  paymentForm: FormGroup;
  ngOnInit(){
      this.payments = this.Payments.getPayments();
      
  }
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      paymentForm: FormGroup,
      private Payments: PaymentsService
    ) {
    this.paymentForm  = new FormGroup({
      addebito: new FormControl(''),
      nome: new FormControl(''),
      note: new FormControl('')
    })
    this.payment = new PaymentsModel();
    this.payment.addebito = "";
    this.payment.nome = "";
    this.payment.note = "";
    
  }

  createPayment() {
    this.Payments.pushNewPayment(this.payment).then(data=>{
      console.log('creto pagamento',data)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }
  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
