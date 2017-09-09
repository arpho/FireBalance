import { Component, Input, Output, SimpleChanges, EventEmitter, OnChanges } from '@angular/core';
import { ItemModel } from '../../pages/shopping-cart/shoppingCart.model';
import * as _ from 'lodash';

/**
 * Generated class for the TotaleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'totale',
  templateUrl: 'totale.html'
})
export class TotaleComponent implements OnChanges {
  @Input() items: [ItemModel];
  @Input() moneta: string;
  @Input() tassoConversione: number;
  @Output() Totale: EventEmitter<number> = new EventEmitter<number>();
  totale: number;
  text: string;

  calcolaTotale(): number {
    var totale = 0;
    _.forEach(this.items, element => {
      totale += element.prezzo;
    });
    console.log('calcolato totale',totale);
    return totale * this.tassoConversione;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes',changes);
    this.totale = this.calcolaTotale();
  }

  constructor() {
    console.log('Hello TotaleComponent Component',this.moneta);
    this.text = 'Totale: '+this.moneta+" ";
  }

}
