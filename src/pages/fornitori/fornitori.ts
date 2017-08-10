import { Component } from '@angular/core';
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
export class FornitoriPage {
  suppliers:Observable<SupplierModel>;
 newCategory:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private Suppliers:SuppliersService) {
    this.Suppliers.getSuppliers().subscribe(data =>   {
      console.log('fornitori',data);
    } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FornitoriPage');
  }

  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }

}
