import { Component,Input,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl,ReactiveFormsModule } from '@angular/forms';
import { SupplierModel }  from '../../pages/fornitori/fornitori.model';
import { SuppliersService } from '../../pages/fornitori/fornitori.service';
import {UtilitiesService } from '../../app/utilities.service';

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
 @Input() fornitore: SupplierModel;
 ngOnInit() {
    this.supplierForm = new FormGroup({
      indirizzo: new FormControl(this.fornitore.indirizzo),
      latitudine: new FormControl(this.fornitore.latitudine),
      longitudine: new FormControl(this.fornitore.longitudine),
      nome: new FormControl(this.fornitore.nome),
      note: new FormControl(this.fornitore.note),
      onLine: new FormControl(this.fornitore.onLine)
  },Validators.required);
}
  constructor(public  Fornitori:SuppliersService,
              public Utilities:UtilitiesService) {
    console.log('Hello FornitoriWudItemComponent Component');
    this.text = 'Hello World';
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

  update(supplier,key) {
    var fornitore  = new SupplierModel(supplier.controls)
    this.Fornitori.updateSupplier(fornitore,key);
    
  }
  trash(key) {
    this.Fornitori.trashSupplier(key);
    
  }



}
