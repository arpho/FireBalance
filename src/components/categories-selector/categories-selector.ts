import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';
import { CategoriesService } from '../../pages/categories/categories.service';


/**
 * Generated class for the CategoriesSelectorComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'categories-selector',
  templateUrl: 'categories-selector.html'
})
export class CategoriesSelectorComponent {
  categories: Observable<any>;
  @Input() categories_id: string[];
  @Output() Cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  segnaposto: string;
  public filterString: string;
  @Output() selectedCategories: EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor(
    public Categories: CategoriesService
  ) {
    this.segnaposto = "cerca categoria";
    console.log('Hello CategoriesSelectorComponent Component', this.categories_id);
  }

  selectedCategoriesFromList(val) {
    console.log('deselected', val);
    this.categories_id = [];
    _.forEach(val, it => this.categories_id.push(it))// aggiorno la lista delle categorie selezionate
  }
  selectCategory(key) {
    console.log('selected category', key);
    this.categories_id.push(key);
  }
  cancel() {
    console.log("cancel");
    this.Cancel.emit(true);
  }
  ok() {
    if(this.filterString) //ho cercato una categoria che forse non esiste
      this.Categories.pushCategoryIfNotExist(this.filterString).then(a => {
        console.log('push if not exist', a)
        this.categories_id.push(a.key);
        this.selectedCategories.emit(this.categories_id); // comunico al componente padre la selezione});
      })
      else // non ho cercato categorie
        this.selectedCategories.emit(this.categories_id); // comunico al componente padre la selezione});
    /*this.Categories.getCategories().subscribe(cats=>{
      console.log('categories',cats);
      this.categories = cats;
      console.log('categorie filtrate',cats.filter(x=>x.title==this.filterString));
      console.log('categorie contate',this.categories.filter(x=>x.title==this.filterString)[0]);
      console.log('filterString',this.filterString);
    })*/

  }
}
