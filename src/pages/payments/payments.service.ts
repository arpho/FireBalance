import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase } from 'angularfire2/database';
import {UserService} from '../../app/user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { PaymentsModel} from './payments.model';
import {DbLayer} from '../../app/dbLayer.interface';

@Injectable()
export class PaymentsService  implements DbLayer{
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    private User:UserService) {}

  getElements():Observable<any>{
    return this.getPayments();
  }

  getElementById(id:string): Observable<any>{
    return this.afDB.list(`pagamenti/${this.User.getUserUid()}/${id}`)
  }

  getPayments():Observable<any> {
    return this.afDB.list('pagamenti/'+this.User.getUserUid());
  }

  pushNewPayment(payment) {
   return this.afDB.list('pagamenti/'+this.User.getUserUid()).push(payment);
  }

  updatePayment(pagamento,key) {
   return this.afDB.list('pagamenti/'+this.User.getUserUid()).update(key,pagamento)
  }

  trashPayment(key) {
    return this.afDB.list('pagamenti/'+this.User.getUserUid()).remove(key)
}
}