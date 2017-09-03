import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { SupplierModel } from '../../pages/fornitori/fornitori.model';
import { SuppliersService } from '../../pages/fornitori/fornitori.service';
import { UtilitiesService } from '../../app/utilities.service';
import { CreateSupplierPage } from '../../pages/create-supplier/create-supplier';

/**
 * Generated class for the FornitoriWudItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'fornitori-wud-item',
  templateUrl: 'fornitori-wud-item.html'
})
export class FornitoriWudItemComponent implements OnInit {
  public supplierForm: FormGroup;
  text: string;
  busy: boolean;
  @Input() fornitore: SupplierModel;
  ngOnInit() {
    this.supplierForm = new FormGroup({
      indirizzo: new FormControl(this.fornitore.indirizzo),
      latitudine: new FormControl(this.fornitore.latitudine),
      longitudine: new FormControl(this.fornitore.longitudine),
      key: new FormControl(this.fornitore.key),
      nome: new FormControl(this.fornitore.nome),
      note: new FormControl(this.fornitore.note),
      onLine: new FormControl(this.fornitore.onLine)
    }, Validators.required);
  }
  constructor(public Fornitori: SuppliersService,
    public Utilities: UtilitiesService,
    public modal: ModalController) {
    console.log('Hello FornitoriWudItemComponent Component');
    this.text = 'Hello World';
    this.busy = false;
  }


  text4Switch() {
    return this.Utilities.text4Switch("Fornitore On-line", "fornitore tradizionale", this.supplierForm.controls.onLine.value);
  }

  geolocalize() {
    this.busy = true;
    console.log('localizing');
    this.Utilities.geolocalize().then((resp) => {
      console.log('coordinate', resp.coords.latitude, resp.coords.longitude);
      this.supplierForm.controls.longitudine.setValue(resp.coords.longitude);
      this.supplierForm.controls.latitudine.setValue(resp.coords.latitude);
      this.Utilities.inverseGeoLocation(resp.coords.latitude, resp.coords.longitude).subscribe(data => {
        this.busy = false;
        this.supplierForm.controls.indirizzo.setValue(this.Utilities.makeAddress(data.json()));

      });
    })
  }

  update(supplier, key) {
    var fornitore = new SupplierModel(supplier.controls)
    fornitore.key = key;
    console.log('updating fornitore', fornitore)
    let modal = this.modal.create(CreateSupplierPage, fornitore);
    modal.present();
    //this.Fornitori.updateSupplier(fornitore, key);

  }
  trash(key) {
    this.Fornitori.trashSupplier(key);

  }



}
