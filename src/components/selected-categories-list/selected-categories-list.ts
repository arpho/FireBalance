import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { CategoryModel } from '../category/category.model';

/**
 * Generated class for the SelectedCategoriesListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'selected-categories-list',
  templateUrl: 'selected-categories-list.html',
  //@Input() categories:Array<string>
})
export class SelectedCategoriesListComponent {
  @Input()  categories:string[];
  @Output() selectedCategories: EventEmitter<string[]> = new EventEmitter<string[]>();

  text: string;

  constructor() {
    console.log('Hello SelectedCategoriesListComponent Component',this.categories);
    this.text = 'Hello World list of categories';
  }
  clicked(val) {
    console.log('clicked category inside selectedCategoryList',val);
    console.log('original list',this.categories);
    this.categories = this.categories.filter(cat =>cat !=val);
    console.log('filtered list',this.categories);
    


  }

}
