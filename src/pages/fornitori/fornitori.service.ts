import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase } from 'angularfire2/database';
import { Model } from '../pages/listing/listing.model';
import { UserService } from '../../app/user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { SupplierModel } from './fornitori.model';
import { DbLayer } from '../../app/dbLayer.interface'

@Injectable()
export class SuppliersService implements DbLayer {
  getComponentType() {
    return "supplier";
  }
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    //,// produce uno strano errore no peovider for Observable 
    private User: UserService) { }
  getElements(): Observable<any> {
    return this.getSuppliers()
  }

  getElementById(id: string): Observable<any> {
    const url = 'fornitori/' + this.User.getUserUid() + '/' + id;
    return this.afDB.list(url);
  }

  getSuppliers(): Observable<any> {
    return this.afDB.list('fornitori/' + this.User.getUserUid());
  }

  pushNewSupplier(fornitore) {
    return this.afDB.list('fornitori/' + this.User.getUserUid()).push(fornitore);
  }

  updateSupplier(fornitore, key) {
    return this.afDB.list('fornitori/' + this.User.getUserUid()).update(key, fornitore)
  }

  trashSupplier(key) {
    return this.afDB.list('fornitori/' + this.User.getUserUid()).remove(key).then(e => {
    });
  }
}