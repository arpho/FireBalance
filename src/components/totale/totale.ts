import { Component, Input, Output, SimpleChanges, EventEmitter, OnChanges,OnInit } from '@angular/core';
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
  @Input() ricalcolaTotale:string;// serve solo com trigger, OnChanges non è attivato aggiungendo elementi ad un array
  @Input() tassoConversione: number;
  @Output() Totale: EventEmitter<number> = new EventEmitter<number>();
  totale: number;
  text: string;
  ngOnInit(){
    this.text = 'Totale: '+this.moneta+" ";
  }

  calcolaTotale(): number {
    var totale = 0;
    _.forEach(this.items, element => {
    totale += Number(element.prezzo);
    });
    console.log('calcolato totale',totale);
    return totale * this.tassoConversione;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes',changes);
    this.totale = this.calcolaTotale();
    this.Totale.emit(this.totale);
  }

  constructor() {
    console.log('Hello TotaleComponent Component',this.moneta);
    
  }

}
