import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl,ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SupplierModel } from '../fornitori/fornitori.model';
import { SuppliersService } from '../fornitori/fornitori.service';
import {UtilitiesService } from '../../app/utilities.service';

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
  title:string;
  public supplierForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    fb:FormBuilder,
    public geolocation: Geolocation,
  public Utilities: UtilitiesService,
  public  Suppliers: SuppliersService,
  public view:ViewController) {
    this.title = "Nuovo Fornitore";
    this.supplierForm  = fb.group({
      nome: new FormControl(''),
      note: new FormControl(''),
      indirizzo: new FormControl(''),
      latitudine: new FormControl(''),
      longitudine: new FormControl(''),
      onLine: new FormControl(false)
    },
  Validators.required);

  }
  text4Switch(){
    return this.Utilities.text4Switch("Fornitore On-line","fornitore tradizionale",this.supplierForm.controls.onLine.value);
  }
  geolocalize() {
    console.log('localizing');
    this.Utilities.geolocalize().then((resp) => {
      console.log('coordinate',resp.coords.latitude,resp.coords.longitude);
      this.supplierForm.controls.longitudine.setValue(resp.coords.longitude);
      this.supplierForm.controls.latitudine.setValue(resp.coords.latitude);
      this.Utilities.inverseGeoLocation(resp.coords.latitude,resp.coords.longitude).subscribe(data=>{
        this.supplierForm.controls.indirizzo.setValue(this.Utilities.makeAddress(data.json()));

      });
     })
  }
  
  createSupplier(supplier:any) {
    var Supplier = new SupplierModel(supplier.controls);
    console.log('creo fornitore',Supplier);
    this.view.dismiss();
    this.Suppliers.pushNewSupplier(Supplier).then(data=>{
      this.Utilities.showToast('Fornitore aggiunto','5000','bottom',toast=>{ console.log('toastad',toast)
    });
    })
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
