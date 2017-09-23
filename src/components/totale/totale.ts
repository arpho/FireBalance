import { Component, Input, Output, SimpleChanges, EventEmitter, OnChanges,OnInit,KeyValueDiffers,DoCheck } from '@angular/core';
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
export class TotaleComponent implements OnChanges,OnInit {
  @Input() items: [ItemModel];
  @Input() moneta: string;
  @Input() tassoConversione: number;
  @Output() Totale: EventEmitter<number> = new EventEmitter<number>();
  totale: number;
  text: string;
  ngOnInit(){
    this.text = 'Totale: '+this.moneta+" ";
  }

  
  calcolaTotale(): number {
    console.log('calcolo totale')
    var totale = 0;
    _.forEach(this.items, element => {
    totale += Number(element.prezzo);
    });
    console.log('calcolato totale',totale * this.tassoConversione)
    return totale * this.tassoConversione;
  }
  ngOnChanges(changes: SimpleChanges) {
   
    console.log('cambio');
    this.totale = this.calcolaTotale();
    this.Totale.emit(this.totale);
  }

  constructor(public differs:  KeyValueDiffers) {
    
  }

}
