import { Component } from '@angular/core';
import { CategoryComponent } from '../category/category'
import { CategoriesService } from '../../pages/categories/categories.service';
import { CategoryModel } from '../category/category.model';

/**
 * Generated class for the SelectedCategoryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'selected-category',
  templateUrl: 'selected-category.html'
})
export class SelectedCategoryComponent extends CategoryComponent {

  text: string;

  constructor(public Categories:CategoriesService) {
    super(Categories);
    this.text = 'Hello World selected_category';
    
  }

}
