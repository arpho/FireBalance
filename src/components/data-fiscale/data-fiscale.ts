import { ShoppingCartService as ShoppingCartService } from '../../pages/shopping-cart/shopping-cart.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges as eventEmitter } from '@angular/core';
import { PaymentsModel } from '../../pages/payments/payments.model'

/**
 * Generated class for the DataFiscaleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'data-fiscale',
  templateUrl: 'data-fiscale.html'
})
export class DataFiscaleComponent implements OnChanges {
  @Input() dataAcquisto: string;
  @Input() payment: PaymentsModel;
  @Output() dataAddebitoCalculated: EventEmitter<string> = new EventEmitter<string>();
  dataAddebito:string;
  text: string;

  constructor(public Shopping:ShoppingCartService) {
    console.log('Hello DataFiscaleComponent Component');
    this.text = 'Hello World';
  }


  ngOnChanges(changes: SimpleChanges) {
    if (this.dataAcquisto && this.payment){
      
      this.dataAddebito = new Date(this.Shopping.calcolaDataAddebito(this.payment,this.dataAcquisto)).toISOString();
      console.log('calcolato dataAddebito',this.dataAddebito);
      this.dataAddebitoCalculated.emit(this.dataAddebito);
    }

  }

}
