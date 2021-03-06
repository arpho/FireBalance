import { CreateSupplierPageModule } from '../create-supplier/create-supplier.module';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { SuppliersService } from './fornitori.service';
import { SupplierModel } from './fornitori.model';
import { CreateSupplierPage } from '../create-supplier/create-supplier';
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
  suppliers: Observable<SupplierModel>;
  filterFornitore: string;
  component: string;
  fieldId: string;
  supplier: SupplierModel;
  createSupplierPage: CreateSupplierPage;
  segnaposto: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modal: ModalController,
    public Suppliers: SuppliersService) {
    this.supplier = new SupplierModel();
    this.supplier.nome = "";
    this.supplier.indirizzo = "";
    this.supplier.latitudine = "";
    this.supplier.longitudine = "";
    this.supplier.note = "";
    this.segnaposto = "filtra per nome";
    this.component = "supplier";
    this.fieldId = "-Kt16RPjJ_mr9valYyov";
  }
  selectedEvent(id) {
    console.log('got selection', id);
    this.fieldId = id;
  }

  filterSupplier(categoria): boolean {
    var re = new RegExp(this.filterFornitore, 'i');
    if (this.filterFornitore) { //console.log('match',categoria.title.match(re))
      return categoria.nome.match(re) != null;
    }
    else
      return true;

  }

  ngOnInit() {
    this.suppliers = this.Suppliers.getSuppliers()

  }
  navigate() {
    console.log('navigator');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FornitoriPage');
  }
  createSupplier() {
    console.log('creo fornitore', this.supplier);
    let modal = this.modal.create(CreateSupplierPage);
    modal.present();
  }

  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
