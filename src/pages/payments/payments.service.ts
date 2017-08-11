import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase } from 'angularfire2/database';
import {UserService} from '../../app/user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { PaymentsModel} from './payments.model';

@Injectable()
export class PaymentsService  {
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    private User:UserService) {}



  getPayments():Observable<any> {
    return this.afDB.list('pagamenti/'+this.User.getUserUid());
  }

  pushNewPayment(fornitore) {
   return this.afDB.list('pagamenti/'+this.User.getUserUid()).push(fornitore);
  }

  updatePayment(fornitore) {
    this.afDB.list('pagamenti/'+this.User.getUserUid()).update(fornitore.$key,fornitore)
  }

  trashPayment(fornitore) {
    this.afDB.list('pagamenti/'+this.User.getUserUid()).remove(fornitore.$key).then(e => {
    });
  }
}