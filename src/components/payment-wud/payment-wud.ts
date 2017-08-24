import { Component,Input,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl,ReactiveFormsModule } from '@angular/forms';
import { PaymentsModel } from '../../pages/payments/payments.model';
import { PaymentsService } from '../../pages/payments/payments.service';
import { UtilitiesService} from '../../app/utilities.service';
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
export class PaymentWudComponent implements OnInit {
  public paymentForm: FormGroup;
  text: string;
  @Input() payment:PaymentsModel;
  ngOnInit() {

   this.paymentForm  = new FormGroup({
    addebito: new FormControl(this.payment.addebito),
    nome: new FormControl(this.payment.nome),
    note: new FormControl(this.payment.note)
  },
Validators.required);
  }
  constructor(private Payments:PaymentsService,
    private Utilities: UtilitiesService
  ) {
  }
  update(payment:any,key:any) {
    console.log('key',key);
    const Payment = new PaymentsModel(payment.controls);
    console.log('updated supplier',Payment);
    this.Payments.updatePayment(Payment,key).then(e => {
      if(e)
        console.log('errore',e);
      else
        this.Utilities.showToast('Modalità di pagamento modificata','5000','bottom',toast=>{
          console.log('toasted',toast);
        });
    });
    
  }
  trash(key:any) {
    this.Payments.trashPayment(key).then(e=>{
      if(e)
        console.log('errore ',e)
      else
        this.Utilities.showToast('modalità di pagamento cancellata','5000','bottom',toast =>{
          console.log("toasted",toast);
        })
  })

}
}
