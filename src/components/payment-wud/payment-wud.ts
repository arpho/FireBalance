import { Component,Input } from '@angular/core';
import { PaymentsModel } from '../../pages/payments/payments.model';
import { PaymentsService } from '../../pages/payments/payments.service';
/**
 * Generated class for the PaymentWudComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'payment-wud',
  templateUrl: 'payment-wud.html'
})
export class PaymentWudComponent {

  text: string;
  @Input() payment:PaymentsModel;
  constructor(private Payments:PaymentsService) {
   
  }
  update(supplier) {
    this.Payments.updatePayment(supplier);
    
  }
  trash(supplier) {
    this.Payments.trashPayment(supplier);
    
  }

}
