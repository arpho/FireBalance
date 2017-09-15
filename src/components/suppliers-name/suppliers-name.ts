import { Component, Input, OnInit } from '@angular/core';
import { SuppliersService } from '../../pages/fornitori/fornitori.service';
import { SupplierModel } from '../../pages/fornitori/fornitori.model';
import * as _ from 'lodash';

/**
 * Generated class for the SuppliersNameComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'suppliers-name',
  templateUrl: 'suppliers-name.html'
})
export class SuppliersNameComponent {

  text: string;
  @Input() supplierId: string;
  Supplier: SupplierModel;
  ngOnInit() {
    if (this.supplierId) {
      this.Service.getElementById(this.supplierId).subscribe(supplier => {
        var obj = {}
        _.forEach(supplier, element => {
          obj[element.$key] = element.$value

        });
        this.Supplier = new SupplierModel().build(obj);
      })
    }
    else // se il fornitoreId non è presente non interrogo il db
    this.Supplier = new SupplierModel()
  }


  getNome() {
     const notavailble = "nome fornitore non disponibile"
    if (this.Supplier)
              return this.Supplier.nome || notavailble;
            else 
            return notavailble;
  }
  constructor(
    public Service: SuppliersService
  ) {
    this.text = 'Hello World';
  }

}
