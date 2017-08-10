import { Injectable, OnInit } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase } from 'angularfire2/database';
import { Model } from '../pages/listing/listing.model';
import {UserService} from '../../app/user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { SupplierModel} from './fornitori.model';

@Injectable()
export class SuppliersService implements OnInit {
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    //,// produce uno strano errore no peovider for Observable 
    private User:UserService) {}

  ngOnInit() {
    this.afDB.list('fornitori/'+this.User.getUserUid()).subscribe(data=>{
      console.log('fornitori',data);
    })
 console.log('loaded fornitori');
  }

  getSuppliers():Observable<any> {
    return this.afDB.list('fornitori/'+this.User.getUserUid());
  }

  pushNewSupplier(fornitore) {
   this.afDB.list('fornitori/'+this.User.getUserUid()).push(fornitore);
  }

  updateCategory(fornitore) {
    this.afDB.list('fornitori/'+this.User.getUserUid()).update(fornitore.$key,fornitore)
  }

  trashCategory(fornitore) {
    this.afDB.list('fornitori/'+this.User.getUserUid()).remove(fornitore.$key).then(e => {
    });
  }
}