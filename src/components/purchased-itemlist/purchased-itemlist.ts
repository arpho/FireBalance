import { Component,Input,Output,EventEmitter } from '@angular/core';
import {ItemModel} from '../../pages/shopping-cart/shoppingCart.model';

/**
 * Generated class for the PurchasedItemlistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'purchased-itemlist',
  templateUrl: 'purchased-itemlist.html'
})
export class PurchasedItemlistComponent {
  @Input()items:ItemModel[];
  @Output() deleteItem:EventEmitter<string> = new EventEmitter<string>();
  @Output() UpdatedItem:EventEmitter<ItemModel> = new EventEmitter<ItemModel>();
  text: string;

  constructor() {
    console.log('Hello PurchasedItemlistComponent Component');
    this.text = 'Hello World';
  }
  delete(id){
    console.log('item id  to delete',id)
    //this.items = this.items.filter(x=>x.id!=id)
    this.deleteItem.emit(id);
  }

  updatedItem(id){
    this.UpdatedItem.emit(id);
  }

}
