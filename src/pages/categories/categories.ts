import { Component} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriesService } from './categories.service';

/**
 * Generated class for the CategoriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage  {
  categories:Observable<any>;

 
  constructor(public navCtrl: NavController, public navParams: NavParams,
 public  Categories:CategoriesService) {
    this.categories = this.Categories.getCategories();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

}
