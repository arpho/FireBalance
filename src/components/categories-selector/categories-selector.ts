import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as _ from 'lodash';

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
  @Input() categories_id:string[];
  segnaposto:string;
  filterString:string;
  @Output() selectedCategories: EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor() {
    this.segnaposto = "cerca categoria";
    console.log('Hello CategoriesSelectorComponent Component',this.categories_id);
  }

  deselectedCategories(val){
    console.log('deselected',val);
    this.categories_id = [];
    _.forEach(val,it=>this.categories_id.push(it))// aggiorno la lista delle categorie selezionate
  }
  selectCategory(key) {
    console.log('selected category',key);
    this.categories_id.push(key);
  }
  cancel() {
    console.log("cancel");
  }
  ok() {
    console.log('ok',this.categories_id);
    this.selectedCategories.emit(this.categories_id)
  }

}
