import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DbLayer } from '../../app/dbLayer.interface';
import { SuppliersService } from '../../pages/fornitori/fornitori.service';
import { Observable } from 'rxjs/Rx';
import { UtilitiesService } from '../../app/utilities.service'
import { CreateSupplierPage } from '../../pages/create-supplier/create-supplier';
import { CreatePaymentPage } from '../../pages/create-payment/create-payment';
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
  @Input() db: DbLayer;//servizio di  backend
  @Input() fieldId: string;
  @Input() placeholder: string;
  @Input() CreatePage: any;
  @Input() component: string;// componente di cui aprire il popup di creazione
  @Output() selected: EventEmitter<string> = new EventEmitter<string>(); // segnale emesso al componente father in caso di selezione nei componenti figli
  Components: any //oggetto usato per la selezione del popup da visualzzare
  filterString: string;
  items: Observable<any> // items visualizzati nella lista

  add() {
    console.log('adding');
    let modal = this.modal.create(this.Components[this.db.getComponentType()]);
    modal.present();
  }

  ngOnInit() {
    this.items = this.db.getElements();
    console.log('fieldId in selector oninit', this.fieldId)

  }

  selectedEvent(id: any) {
    //this.filterString = "";
    this.selected.emit(id);
  }

  constructor(

    public modal: ModalController,
    public Utilities: UtilitiesService,
    public Suppliers: SuppliersService) {
    console.log('fieldId in selector constructor', this.fieldId)
    //this.placeholder = 'seleziona fornitore';
    this.Components = { "supplier": CreateSupplierPage, "payment": CreatePaymentPage };
  }

}
