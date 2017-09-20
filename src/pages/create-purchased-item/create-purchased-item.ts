
import * as _ from 'lodash';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ItemModel } from '../shopping-cart/shoppingCart.model';
import { CategoriesSelectorPage } from '../categories-selector/categories-selector';


/**
 * Generated class for the CreatePurchasedItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-purchased-item',
  templateUrl: 'create-purchased-item.html',
})
export class CreatePurchasedItemPage {
  title: string;
  public itemForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    fb: FormBuilder,
    public modal: ModalController,
    public Item: ItemModel,
    public view: ViewController
  ) {
    console.log('create item, nAVPARAMS', navParams);
    this.title = this.Item.key ? ` modifica item ${this.Item.descrizione}` : "aggiungi Item";
    this.Item = new ItemModel().build(navParams.data);
    //TODO caricare dati item da modificare
    this.itemForm = fb.group({
      prezzo: new FormControl(this.Item.prezzo),
      descrizione: new FormControl(this.Item.descrizione),
      barcode: new FormControl(this.Item.barcode),
      tassoConversione: new FormControl(this.Item.tassoConversione),
      moneta: new FormControl(this.Item.moneta),
      key: new FormControl(this.Item.key),
      picture: new FormControl(this.Item.picture),
      categorieId: new FormControl(this.Item.categorieId),
      quantita: new FormControl(this.Item.quantita)
    });
    console.log('new Item', this.Item);
  }

  hasCategories() {
    return (typeof this.Item.categorieId !== 'undefined' && this.Item.categorieId[0]);
  }
  categoriesSelector() {

    let modal = this.modal.create(CategoriesSelectorPage, this.Item.categorieId);
    modal.onDidDismiss(values => {
      console.log('categoriesSelector dismissed', values);
      if ( values.ok)
      this.Item.categorieId = values.categories;
      console.log('added categories to Item', values, this.Item);
    })
    modal.present();
  }

  submit(item) {
    var obj = {
      "descrizione": item.controls.descrizione.value,
      "barcode": item.controls.barcode.value,
      "prezzo": item.controls.prezzo.value,
      "tassoConversione": item.controls.tassoConversione.value || 1,
      "picture": item.controls.picture.value,
      "key": item.controls.key.value,
      "categorieId": this.Item.categorieId,
      "quantita": item.controls.quantita.value,
      "moneta": item.controls.moneta.value

    };

    console.log('item', obj);

    let Item = new ItemModel();
    Item.build(obj);

    //Item.build({prezz})
    console.log("submit", Item);
    this.view.dismiss(Item);
  }
  dismiss() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePurchasedItemPage');
  }

}
