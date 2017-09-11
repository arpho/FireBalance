
import * as _ from 'lodash';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { IonicPage, NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
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
    public modal:ModalController,
    public Item: ItemModel,
    public view: ViewController
    ) {
    this.title = navParams.get('key') ? ` modifica item ${navParams.get('descrizione')}` : "aggiungi Item";
    console.log('item cat',Item.categorieId.length,Item.categorieId)
;    this.itemForm = fb.group({
      prezzo: new FormControl(navParams.get('prezzo')),
      descrizione: new FormControl(navParams.get("descrizione")),
      barcode: new FormControl(navParams.get('barcode')),
      tassoConversione: new FormControl(navParams.get('tassoConversione')),
      moneta: new FormControl(navParams.get("moneta")),
      key: new FormControl(navParams.get('key')),
      picture: new FormControl(navParams.get('picture')),
      categorieId: new FormControl(navParams.get('categorieId')),
      quantita: new FormControl(navParams.get('quantita'))
    });
  }

  categoriesSelector() {
    
        let modal = this.modal.create(CategoriesSelectorPage, this.Item.categorieId);
        modal.onDidDismiss(values => {
          console.log('modal dismissed', values);
          this.Item.categorieId = values; 
          console.log('item',this.Item);
        })
        modal.present();
      }

  submit(item){
    var obj ={
      "descrizione":item.controls.descrizione.value,
      "barcode":item.controls.barcode.value,
      "prezzo":item.controls.prezzo.value,
      "tassoConversione":item.controls.tassoConversione.value||1,
      "picture":item.controls.picture.value,
      "key":item.controls.key.value,
      "categorieId":this.Item.categorieId,
      "quantita":item.controls.quantita.value,
      "moneta":item.controls.moneta.value

    };

      console.log('item',obj);
    
    let Item = new ItemModel();
    Item.build(obj);

    //Item.build({prezz})
    console.log("submit",Item);
    this.view.dismiss(Item);
  }
  dismiss(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePurchasedItemPage');
  }

}