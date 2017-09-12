import { Component } from '@angular/core';

/**
 * Generated class for the LettereColorateComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'lettere-colorate',
  templateUrl: 'lettere-colorate.html'
})
export class LettereColorateComponent {

  text: string;

  constructor() {
    console.log('Hello LettereColorateComponent Component');
    this.text = 'Hello World';
  }

}
