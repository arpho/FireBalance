import { Component, Input, Output, EventEmitter, OnInit,OnChanges,SimpleChanges } from '@angular/core';
import { SelectedCategoriesListComponent } from '../selected-categories-list/selected-categories-list';
import { CategoriesService } from '../../pages/categories/categories.service';
import { Observable } from 'rxjs';

/**
 * Generated class for the SelectableCategoriesListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'selectable-categories-list',
  templateUrl: 'selectable-categories-list.html'
})
export class SelectableCategoriesListComponent extends SelectedCategoriesListComponent implements OnInit,OnChanges {
  SelectableCategories: Observable<any>;
  text: string;
  @Output() selectedCategory: EventEmitter<string> = new EventEmitter<string>(); 
  @Input() filterString: string;
  ngOnInit() {
    this.SelectableCategories = this.Categories.getCategories();
    this.Categories.getCategories().subscribe(cats =>{
    })
  }

  ngOnChanges(changes:SimpleChanges){
    this.Categories.getCategories().subscribe(cats =>{ //aggiorna la lista delle categorie selezionabili
    })
  }

  constructor(
    public Categories: CategoriesService
  ) {
    super();
  }
  isSelected(key)  {
    return this.categories.indexOf(key)>-1
  }
  selected(key) {
    //console.log(`has been selected category_id ${key}`);
    this.selectedCategory.emit(key);
  }
  

}
