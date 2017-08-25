import { Component,Input,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl,ReactiveFormsModule } from '@angular/forms';
import { SupplierModel }  from '../../pages/fornitori/fornitori.model';
import { SuppliersService } from '../../pages/fornitori/fornitori.service';

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
      note: new FormControl(this.fornitore.note)
  },Validators.required);
}
  constructor(public  Fornitori:SuppliersService) {
    console.log('Hello FornitoriWudItemComponent Component');
    this.text = 'Hello World';
  }

  update(supplier,key) {
    var fornitore  = new SupplierModel(supplier)
    this.Fornitori.updateSupplier(supplier,key);
    
  }
  trash(key) {
    this.Fornitori.trashSupplier(key);
    
  }



}
