import { Component,Input } from '@angular/core';
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
export class FornitoriWudItemComponent {

  text: string;
 @Input() fornitore: SupplierModel;
  constructor(public  Fornitori:SuppliersService) {
    console.log('Hello FornitoriWudItemComponent Component');
    this.text = 'Hello World';
  }

  update(supplier) {
    this.Fornitori.updateSupplier(supplier);
    
  }
  trash(supplier) {
    this.Fornitori.trashSupplier(supplier);
    
  }



}
