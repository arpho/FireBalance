import { Component } from '@angular/core';

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
export class CategoriesSetterComponent {

  text: string;

  constructor() {
    console.log('Hello CategoriesSetterComponent Component');
    this.text = 'Hello World';
  }

}
