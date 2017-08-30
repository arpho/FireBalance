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
 segnaposto:string;
 category_id:string;
 categories_id:string[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
 public  Categories:CategoriesService) {
    this.segnaposto = "filtra categoria";
    this.category_id = "-Ks0UbaDoqhXN1yoyKNP";
    this.categories_id = new Array<string>();
    this.categories_id.push("-Ks0UdZGtzunNoCmGGJd");
    this.categories_id.push("-Ks0VR4z3gZTXtwqTZ-V");
    this.categories_id.push("-Ks0UbaDoqhXN1yoyKNP");
    this.Categories.fetchCategoryById(this.category_id).subscribe(cat=>{
      console.log('got category',cat);
    })
    this.categories = this.Categories.getCategories();
  this.Categories.getCategories().subscribe(data=>{
    console.log('categorie',data);
    });
    this.newCategory ='';
    
  }

  selectedCategories(val){
    console.log('selectedCategories',val);
  }

  setFilterString(categoria) {
    this.newCategory = categoria;
  }

  clicked(val) {
    console.log('clicked received',val);
  }

  showCategory(categoria):Boolean {
    var re = new RegExp(this.newCategory,'i');
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
