import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the SimpleitemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'simpleitem',
  templateUrl: 'simpleitem.html'
})
export class SimpleitemComponent {
  @Input() item: any;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  click() {
    this.selected.emit(this.item.$key);
  }

  constructor() {
  }

}
