import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { SuppliersService } from './fornitori.service';
import { SupplierModel} from './fornitori.model';
/**
 * Generated class for the FornitoriPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-fornitori',
  templateUrl: 'fornitori.html',
})
export class FornitoriPage implements OnInit {
  suppliers:Observable<SupplierModel>;
 supplier:SupplierModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private Suppliers:SuppliersService) {
    //this.supplier = "";
    this.supplier = new SupplierModel();
    this.supplier.nome = "";
    this.supplier.indirizzo = "";
    this.supplier.latitudine = "";
    this.supplier.longitudine = "";
    this.supplier.note = "";
  }
  ngOnInit(){
    this.suppliers = this.Suppliers.getSuppliers()
  }
  navigate() {
    console.log('navigator');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FornitoriPage');
  }
  createSupplier() {
    console.log('creo fornitore',this.supplier);
    this.Suppliers.pushNewSupplier(this.supplier).then(data=>{
      console.log('dati inseriti',data,'errore');
    })
  }

  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
