import { PaymentsModel } from '../payments/payments.model';
import { SuppliersService } from '../fornitori/fornitori.service';
import { PaymentsService } from '../payments/payments.service';
import { DateTime } from 'ionic-angular/umd';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MdNativeDateModule, MdDatepicker, MdDatepickerToggle } from '@angular/material';
import * as _ from 'lodash';    

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
  dataAddebito: string;
  dataAcquisto
  componentSupplier: string; //identifica quale pagina di creazione aprire supplier per i fornitori, payment per i pagamenti, etc.
  ngOnInit() {
    this.dataAcquisto = new Date().toISOString();
  }
  title: string;
  fieldIdFornitore: string;
  fieldIdPagamento: string;
  paymentPlaceholder: string;
  supplierPlaceholder: string;
  mydate: DateTime;
  payment:PaymentsModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Payments: PaymentsService,
    public Suppliers: SuppliersService,
    public view: ViewController) {
    this.title = navParams.get('key') ? "modifica carrello della spesa" : "Nuovo Carrello della spesa";
    this.supplierPlaceholder = "seleziona fornitore";
    this.paymentPlaceholder = "seleziona metodo di pagamento";
    //this.dataContabile = new Date().toISOString();
  }
  dismiss() {
    this.view.dismiss();
  }

  selectedSupplier(id) {
    this.fieldIdFornitore = id;
  }

  selectedPayment(id) {
    console.log('got payment', id);
    this.fieldIdPagamento = id;
    this.Payments.getElementById(id).subscribe(data=>{
      console.log('pagamento',data);
      var payment = {};
      _.forEach(data[0],item=>{payment[item.$key]=item.$value})
      this.payment = new PaymentsModel().buildPayment(payment)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateShoppingCartPage');
  }

}
