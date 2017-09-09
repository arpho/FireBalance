import { ShoppingCart } from '../listing/listing.model';
import { PaymentsModel } from '../payments/payments.model';
import { SuppliersService } from '../fornitori/fornitori.service';
import { PaymentsService } from '../payments/payments.service';
import { DateTime } from 'ionic-angular/umd';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { MdNativeDateModule, MdDatepicker, MdDatepickerToggle } from '@angular/material';
import * as _ from 'lodash';
import * as moment from 'moment/moment';
import { ItemModel, ShoppingCartModel } from '../shopping-cart/shoppingCart.model';
import { CreatePurchasedItemPage } from '../create-purchased-item/create-purchased-item';
import { TooltipsModule } from 'ionic-tooltips';


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
  calcolaTotale:string;
  supplierPlaceholder: string;
  mydate: DateTime;
  payment: PaymentsModel;
  constructor(public navCtrl: NavController,
    public modal: ModalController,
    public navParams: NavParams,
    public Payments: PaymentsService,
    public Suppliers: SuppliersService,
    public ShoppingCart: ShoppingCartModel,
    public view: ViewController) {
    this.title = navParams.get('key') ? "modifica carrello della spesa" : "Nuovo Carrello della spesa";
    this.supplierPlaceholder = "seleziona fornitore";
    this.ShoppingCart = new ShoppingCartModel();
    console.log('shoppingCart',this.ShoppingCart);
    this.paymentPlaceholder = "seleziona metodo di pagamento";
  }
  dismiss() {
    this.view.dismiss();
  }

  selectedSupplier(id) {
    this.fieldIdFornitore = id;
  }
  fab() {
    let modal = this.modal.create(CreatePurchasedItemPage);
    modal.onDidDismiss(d => {
      console.log('pushed item',d);
      this.ShoppingCart.items.push(d);
      this.calcolaTotale = new Date().toISOString();// trigger per il compnente totale
      this.ShoppingCart.totale = Number(0);

     /* _.forEach(this.ShoppingCart.items, (it: ItemModel) => {
        this.ShoppingCart.totale = Number(this.ShoppingCart.totale) + Number(it.prezzo)
        console.log('parziale', this.ShoppingCart.totale);
      });*/
      console.log('totale,', this.ShoppingCart.totale);
    })
    modal.present();
  }
  pushShoppingCart(cart:ShoppingCartModel){
    console.log('caRRELLO',cart);
  }

  selectedPayment(id) {
    this.ShoppingCart.pagamentoId = id;
    this.Payments.getElementById(id).subscribe(data => {
      //console.log('pagamento',data);
      var payment = {};
      _.forEach(data[0], item => { payment[item.$key] = item.$value })
      this.payment = new PaymentsModel().buildPayment(payment)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateShoppingCartPage');
  }


}