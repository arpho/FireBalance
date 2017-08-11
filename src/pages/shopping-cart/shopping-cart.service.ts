import { Injectable, OnInit } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingCartModel,ItemModel } from './shopping-cart.model';
import {UserService} from '../../app/user.service';
import { FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class ShoppingCartService implements OnInit {
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    //,// produce uno strano errore no peovider for Observable 
    private User:UserService) {}

  ngOnInit() {
    this.afDB.list('acquisti/'+this.User.getUserUid()).subscribe(data=>{
      console.log('acquisti',data);    })
  }

  getCategories():Observable<any> {
    return this.afDB.list('acquisti/'+this.User.getUserUid());
  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  pushNewShoppingCart(acquisto) {
   this.afDB.list('acquisti/'+this.User.getUserUid()).push(acquisto);
  }
  updateShoppingCart(acquisto) {
    this.afDB.list('acquisti/'+this.User.getUserUid()).update(acquisto.$key,acquisto)
  }
  trashShoppingCart(acquisto) {
    this.afDB.list('acquisti/'+this.User.getUserUid()).remove(acquisto.$key).then(e => {
    });
  }






}