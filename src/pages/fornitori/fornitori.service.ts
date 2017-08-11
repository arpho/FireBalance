import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase } from 'angularfire2/database';
import { Model } from '../pages/listing/listing.model';
import {UserService} from '../../app/user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { SupplierModel} from './fornitori.model';

@Injectable()
export class SuppliersService  {
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    //,// produce uno strano errore no peovider for Observable 
    private User:UserService) {}



  getSuppliers():Observable<any> {
    return this.afDB.list('fornitori/'+this.User.getUserUid());
  }

  pushNewSupplier(fornitore) {
   return this.afDB.list('fornitori/'+this.User.getUserUid()).push(fornitore);
  }

  updateSupplier(fornitore) {
    this.afDB.list('fornitori/'+this.User.getUserUid()).update(fornitore.$key,fornitore)
  }

  trashSupplier(fornitore) {
    this.afDB.list('fornitori/'+this.User.getUserUid()).remove(fornitore.$key).then(e => {
    });
  }
}