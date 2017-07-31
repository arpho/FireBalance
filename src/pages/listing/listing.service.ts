import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ListingModel } from './listing.model';
import {UserService} from '../../app/user.service';

@Injectable()
export class ListingService {
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    private User:UserService) {}

  getData(): Promise<ListingModel> {
    return this.http.get('./assets/example_data/listing.json') //TODO leggere ramo spese in firebase
     .toPromise()
     .then(response => response.json() as ListingModel)
     .catch(this.handleError);
  }
  
  getShoppingCarts():FirebaseListObservable<any> {
     console.log('listing shoppingcart','/shoppingCarts/'+this.User.getUserUid());
    return this.afDB.list('conti/'+this.User.getUserUid()+'/0'+'/shoppingCarts/');

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }




}