import { CategoriesService } from '../../pages/categories/categories.service';
import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { CategoryModel } from './category.model';


/**
 * Generated class for the CategoryComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'category',
  template: ''
})
export class CategoryComponent implements OnInit {
  @Input() category_id:string;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  category: CategoryModel;
  categoria: any;
  text: string;
  ngOnInit() {
    console.log('init categoria',this.category_id);
    this.categoria = this.Categories.fetchCategoryById(this.category_id);
    this.Categories.fetchCategoryById(this.category_id).subscribe(category=>{
      const categoria = {
        title:category[0].$value,
        icon: category[0].icon,
        id: this.category_id
      }

      this.category = new CategoryModel().buildCategory(categoria);
    })

  }
  click () {
    console.log('clicked on categoryComponent',this.category_id);
    this.clicked.emit(this.category_id);
  }


  constructor(
    public Categories:CategoriesService
  ) {
    console.log('Hello CategoryComponent Component');
    this.text = 'Hello World';
  }

}
