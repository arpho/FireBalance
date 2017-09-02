import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { DbLayer } from '../../app/dbLayer.interface';
import { SuppliersService } from '../../pages/fornitori/fornitori.service';
import { Observable } from 'rxjs/Rx';
import { UtilitiesService } from '../../app/utilities.service'
import { CreateSupplierPage } from '../../pages/create-supplier/create-supplier';
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
  @Input() create:any;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  text: string;
  filterString: string;
  placeholder: string;
  items: Observable<any>

  add(){
    console.log('adding');
    let modal = this.modal.create(CreateSupplierPage);
    modal.present();
  }

  ngOnInit() {
    this.items = this.db.getElements();

  }

  selectedEvent(id: any) {
    this.selected.emit(id);
  }

  constructor(
    public modal: ModalController,
    public Utilities: UtilitiesService,
    public Suppliers: SuppliersService) {
    this.placeholder = 'seleziona fornitore';
    console.log('Hello SelectorComponent Component');
    this.text = 'Hello World selectors';
  }

}
