import { Component,Input } from '@angular/core';
import { Categoria }  from '../../pages/listing/listing.model';
import { CategoriesService } from '../../pages/categories/categories.service';

/**
 * Generated class for the CategoryWudItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'category-wud-item',
  templateUrl: 'category-wud-item.html'
})
export class CategoryWudItemComponent {

  text: string;
 @Input() categoria: Categoria;
  constructor(public  Categories:CategoriesService) {
  }

  update(updatedCategory) {
    this.Categories.updateCategory(updatedCategory);
    
  }
  trash(updatedCategory) {
    this.Categories.trashCategory(updatedCategory);
    
  }

}
