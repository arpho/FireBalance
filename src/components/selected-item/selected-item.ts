import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { DbLayer } from '../../app/dbLayer.interface';
import * as _ from 'lodash';

/**
 * Generated class for the SelectedItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'selected-item',
  templateUrl: 'selected-item.html'
})
export class SelectedItemComponent implements OnInit, OnChanges {

  item: any;

  @Input() fieldId: string;
  @Input() db: DbLayer;

  loadItem() {
    this.db.getElementById(this.fieldId).subscribe(data => {
      this.item = {};

      _.forEach(data, i => this.item[i.$key] = i.$value);

    })

  }
  ngOnInit() {
    this.loadItem();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadItem();
  }


  constructor() {
    this.item = { nome: "boom " }
  }

}
