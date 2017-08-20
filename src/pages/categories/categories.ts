import { Component} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriesService } from './categories.service';
import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

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
 newCategory:any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
 public  Categories:CategoriesService) {
    this.categories = this.Categories.getCategories();
  this.Categories.getCategories().subscribe(data=>{
    console.log('categorie',data);
    });
    this.newCategory ='';
    
  }

  showCategory(categoria):Boolean {
    var re = new RegExp(this.newCategory,'g');
    if(this.newCategory)
     { //console.log('match',categoria.title.match(re))
       return categoria.title.match(re)!=null;
      }
    else 
      return true;
    
  }
  createCategory() {
    var categoria = {"title": this.newCategory};
    this.Categories.pushNewCategory(categoria).then(o=>{
      this.newCategory = "";
    });
  }
  goHome() {
    this.navCtrl.setRoot(TabsNavigationPage);
  }



}
