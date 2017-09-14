
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ItemModel } from '../../pages/shopping-cart/shoppingCart.model';
import { CreatePurchasedItemPage } from '../../pages/create-purchased-item/create-purchased-item';

/**
 * Generated class for the PurchasedItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'purchased-item',
  templateUrl: 'purchased-item.html'
})
export class PurchasedItemComponent {
  @Input() item: ItemModel;
  @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();
  constructor(
    navParams: NavParams,
    public modal: ModalController
  ) {
    console.log('Hello PurchasedItemComponent Component');
  }
  delete() {
    console.log('deleting', this.item)
    this.deleteItem.emit(this.item.id);

  }
  update() {
    console.log('updating', this.item);
    let modal = this.modal.create(CreatePurchasedItemPage, this.item);
    modal.onDidDismiss(item => {
      console.log('updated item', item);
      this.item = item
    })
    modal.present();
  }

}
