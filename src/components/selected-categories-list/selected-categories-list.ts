import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { Observable,Subject } from 'rxjs';
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

  constructor() {
  }

  clicked(val) {
    console.log('clicked category inside selectedCategoryList',val);
    this.categories = this.categories.filter(cat =>cat !=val);// rimuovo la categoria che è stata cliccata
    this.selectedCategories.emit(this.categories)
    


  }

}
