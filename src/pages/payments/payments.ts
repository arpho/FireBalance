import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl,ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { PaymentsModel } from './payments.model';
import { PaymentsService } from './payments.service';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { CreatePaymentPage } from '../create-payment/create-payment';

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
  public paymentForm: FormGroup;
  ngOnInit(){
      this.payments = this.Payments.getPayments();
      /*this.Payments.getPayments().subscribe(data=>{
        console.log('got payments from server',data);
      })*/
      
  }
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private Payments: PaymentsService,
      public modal: ModalController,
      fb:FormBuilder
    ) {
    this.paymentForm  = fb.group({
      addebito: new FormControl(''),
      nome: new FormControl(''),
      note: new FormControl('')
    },
  Validators.required);
    this.payment = new PaymentsModel();
    this.payment.addebito = "";
    this.payment.nome = "";
    this.payment.note = "";
    
  }

  createPayment() {



    let modal = this.modal.create(CreatePaymentPage);
    modal.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }
  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
