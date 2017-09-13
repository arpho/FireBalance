import { Component,OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { CategoriesService } from '../../pages/categories/categories.service';

/**
 * Generated class for the CategoriesSetterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'categories-setter',
  templateUrl: 'categories-setter.html'
})
export class CategoriesSetterComponent implements OnInit {


  isSelected(key)  {
    return false
  }

  ngOnInit() {
    this.SelectableCategories = this.Categories.getCategories();
  }
  text: string;
  SelectableCategories: Observable<any>;

  constructor(
   public Categories:CategoriesService
  ) {
    console.log('Hello CategoriesSetterComponent Component');
    this.text = 'Hello World';
  }

}
