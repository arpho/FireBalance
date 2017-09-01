import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DbLayer } from '../../app/dbLayer.interface';
import { SuppliersService } from '../../pages/fornitori/fornitori.service';
import { Observable } from 'rxjs/Rx';
import { UtilitiesService } from '../../app/utilities.service'
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
export class SelectorComponent implements OnInit {
  @Input() db: DbLayer;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  text: string;
  filterString: string;
  placeholder: string;
  items: Observable<any>

  filter(value: string): boolean {
    return this.Utilities.regexFilter(this.filterString, value);
  }

  ngOnInit() {
    this.items = this.db.getElements();
    this.db.getElements().filter(x => this.filter(x)).subscribe(data => {
      console.log('got data in selector', data);
    })
  }

  selectedEvent(id: any) {
    console.log("selected event in selector", id);
    this.selected.emit(id);
  }

  constructor(
    public Utilities: UtilitiesService,
    public Suppliers: SuppliersService) {
    this.placeholder = 'seleziona fornitore';
    console.log('Hello SelectorComponent Component');
    this.text = 'Hello World selectors';
  }

}
