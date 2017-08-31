import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CategoryComponent } from '../category/category'
import {CategoriesService} from '../../pages/categories/categories.service'

/**
 * Generated class for the SelectableCategoryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'selectable-category',
  templateUrl: 'selectable-category.html'
})
export class SelectableCategoryComponent extends CategoryComponent{

  @Input() filterString:string;
  @Output() clicked: EventEmitter<string>= new EventEmitter<string>();

  constructor(
    public Categories:CategoriesService
  ) {
    super(Categories);
  }

}
