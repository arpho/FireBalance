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
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';// '../shopping-cart/shopping-cart.service.ts'
import { UtilitiesService } from '../../app/utilities.service'

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
  calcolaTotale: string;
  supplierPlaceholder: string;
  mydate: DateTime;
  payment: PaymentsModel;
  constructor(public navCtrl: NavController,
    public utilities: UtilitiesService,
    public modal: ModalController,
    public navParams: NavParams,
    public Payments: PaymentsService,
    public Suppliers: SuppliersService,
    public ShoppingCart: ShoppingCartModel,
    public ShoppingCarts: ShoppingCartService,
    public view: ViewController) {
    this.title = navParams.get('key') ? "modifica carrello della spesa" : "Nuovo Carrello della spesa";
    this.supplierPlaceholder = "seleziona fornitore";
    this.ShoppingCart = new ShoppingCartModel();
  }
  dismiss() {
    this.view.dismiss();
  }

  selectedSupplier(id) {
    this.ShoppingCart.fornitoreId = id;
  }

  setTotale(totale) {
    this.ShoppingCart.totale = totale;
  }
  fab() {
    const item = new ItemModel();
    item.moneta = this.ShoppingCart.moneta;
    item.tassoConversione = this.ShoppingCart.tassoConversione;
    let modal = this.modal.create(CreatePurchasedItemPage, item);
    modal.onDidDismiss(d => {
      console.log('pushed item', d);
      if (d){
        d.id = new Date().valueOf().toString()

        this.ShoppingCart.items = this.ShoppingCart.items.concat([d]); //riassgno l'arrey cosicchè OnChanges rilevi la variazione degli elementi nell'array
        this.ShoppingCart.totale = Number(0);
      }

      /* _.forEach(this.ShoppingCart.items, (it: ItemModel) => {
         this.ShoppingCart.totale = Number(this.ShoppingCart.totale) + Number(it.prezzo)
         console.log('parziale', this.ShoppingCart.totale);
       });*/
      console.log('totale,', this.ShoppingCart.totale);
    })
    modal.present();
  }
  deleteItem(id){
    console.log("item to delete",id);
    this.ShoppingCart.items = this.ShoppingCart.items.filter(x=>x.id!= id)// elimino l'item selezionato
  }
  pushShoppingCart(cart: ShoppingCartModel) {
    console.log('caRRELLO', cart);
    this.ShoppingCarts.pushNewShoppingCart(cart).then(a => {
      console.log('added cart', a)
      this.view.dismiss();// chiudo la finestra modale
      this.utilities.showToast("lista della spesa caricata", "5000", "top", a => {
      })
    }).catch(err => {

      this.view.dismiss();// chiudo la finestra modale
      this.utilities.showToast("c'è stato un errore", "8000", "top", a => {
      })

    })


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