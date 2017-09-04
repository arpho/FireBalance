import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import * as _ from 'lodash';

/**
 * Generated class for the CategoriesSelectorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-categories-selector',
  templateUrl: 'categories-selector.html',
})
export class CategoriesSelectorPage {
  public categories_id:string[];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public view: ViewController
  ) {
    this.categories_id = [];// inizializzo l'array di id 
    console.log('navParams',navParams.data)
    _.forEach(navParams.data,element => {
      this.categories_id.push(element);
    });
    console.log('ids',this.categories_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesSelectorPage');
  }
  selectedCategories(cats){
    console.log('got cats',cats)
  }

  dismiss() {
    this.view.dismiss();
  }

}
