import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/**
 * Generated class for the ListItemsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'list-items',
  templateUrl: 'list-items.html'
})
export class ListItemsComponent {

  @Input() items: Observable<any>
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  text: string;

  selectedItem(id: any) {
    console.log('list-item received event, selected item_key', id);
    this.selected.emit(id);
  }

  constructor() {
    console.log('Hello ListItemsComponent Component');
    this.text = 'Hello World';
  }

}
