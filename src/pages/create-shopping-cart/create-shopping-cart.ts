import { SuppliersService } from '../fornitori/fornitori.service';
import { PaymentsService } from '../payments/payments.service';
import { DateTime } from 'ionic-angular/umd';
import { Component, OnInit } from '@angular/core';
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
  componentSupplier: string; //identifica quale pagina di creazione aprire supplier per i fornitori, payment per i pagamenti, etc.
  ngOnInit() {
    this.date = new Date();
  }
  title: string;
  fieldIdFornitore: string;
  fieldIdPagamento: string;
  mydate: DateTime;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Payments: PaymentsService,
    public Suppliers: SuppliersService,
    public view: ViewController) {
    this.title = navParams.get('key') ? "modifica carrello della spesa" : "Nuovo Carrello della spesa"
  }
  dismiss() {
    this.view.dismiss();
  }

  selectedSupplier(id) {
    console.log('got supplier', id);
    this.fieldIdFornitore = id;
  }

  selectedPayment(id) {
    console.log('got payment', id);
    this.fieldIdPagamento = id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateShoppingCartPage');
  }

}
