import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SupplierModel } from '../fornitori/fornitori.model';
import { SuppliersService } from '../fornitori/fornitori.service';
import { UtilitiesService } from '../../app/utilities.service';

/**
 * Generated class for the CreateSupplierPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-supplier',
  templateUrl: 'create-supplier.html',
})
export class CreateSupplierPage {
  title: string;
  public busy: boolean;
  buttonText: string;
  public supplierForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    fb: FormBuilder,
    public geolocation: Geolocation,
    public Utilities: UtilitiesService,
    public Suppliers: SuppliersService,
    public view: ViewController) {
    this.title = navParams.get('nome') ? navParams.get('nome') : "Nuovo Fornitore";
    this.buttonText = navParams.get('key') ? `Modifica ${navParams.get('nome')}` : "Aggiungi Fornitore"
    this.busy = false;
    this.supplierForm = fb.group({
      nome: new FormControl(navParams.get('nome')),
      note: new FormControl(navParams.get('note')),
      key: new FormControl(navParams.get('key')),
      indirizzo: new FormControl(navParams.get('indirizzo')),
      latitudine: new FormControl(navParams.get('longitudine')),
      longitudine: new FormControl(navParams.get('longitudine')),
      onLine: new FormControl(false)
    },
      Validators.required);

  }
  text4Switch() {
    return this.Utilities.text4Switch("Fornitore On-line", "fornitore tradizionale", this.supplierForm.controls.onLine.value);
  }
  geolocalize() {
    this.busy = true;
    console.log('localizing');
    this.Utilities.geolocalize().then((resp) => {
      this.busy = false;
      console.log('coordinate', resp.coords.latitude, resp.coords.longitude);
      this.supplierForm.controls.longitudine.setValue(resp.coords.longitude);
      this.supplierForm.controls.latitudine.setValue(resp.coords.latitude);
      this.Utilities.inverseGeoLocation(resp.coords.latitude, resp.coords.longitude).subscribe(data => {
        this.supplierForm.controls.indirizzo.setValue(this.Utilities.makeAddress(data.json()));

      });
    })
  }

  createSupplier(supplier: any) {
    var Supplier = new SupplierModel(supplier.controls);
    console.log('creo fornitore', Supplier);
    this.view.dismiss();
    if (!this.navParams.get('key'))
      this.Suppliers.pushNewSupplier(Supplier).then(data => {
        this.Utilities.showToast('Fornitore aggiunto', '5000', 'bottom', toast => {
          console.log('toasted', toast);
        });
      })
    else
      this.Suppliers.updateSupplier(Supplier, Supplier.key).then(data => {
        this.Utilities.showToast("fornitore modificato", "5000", "bottom", toast => {
          console.log("toasted", toast)
        });
      })
      this.view.dismiss();
    /*
    this.Suppliers.pushNewSupplier(new SupplierModel(this.su)).then(data=>{
      console.log('dati inseriti',data,'errore');
    })*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateSupplierPage');
  }
  dismiss() {
    this.view.dismiss();
  }

}
