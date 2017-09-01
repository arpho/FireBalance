import { Component,Input,Output,EventEmitter } from '@angular/core';
import {DbLayer} from '../../app/dbLayer.interface';
import {SuppliersService} from '../../pages/fornitori/fornitori.service'

/**
 * Generated class for the SelectorComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'selector',
  templateUrl: 'selector.html'
})
export class SelectorComponent {
  @Input() db:DbLayer;
  @Output() selected:EventEmitter<string> = new EventEmitter<string>();
  text: string;
  filterString:string;
  placeholder:string;

  selectedEvent(id:any){
    console.log("selected event in selector",id);
    this.selected.emit(id);
  }

  constructor(
    public Suppliers:SuppliersService) {
    this.placeholder = 'seleziona fornitore';
    console.log('Hello SelectorComponent Component');
    this.text = 'Hello World';
  }

}
