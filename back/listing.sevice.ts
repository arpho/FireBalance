
//import { FirebaseApp } from "FirebaseApp"
import { Injectable,Inject } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { AngularFireStorage } from 'angularfire2'
import { ListingModel } from './listing.model';
import {UserService} from '../../app/user.service';

/*@Injectable()
export class ListingService {
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    private User:UserService,
    private storageRef:any,
    @Inject(FirebaseApp) firebaseApp:any
  )
     {
      this.storageRef = firebaseApp.storage().ref();
     }*/

  /*getImageURLFromFirebase(image){
      return this.storageRef.getDownloadURL('immagini/'+image);

  }*/
 

@Injectable()
export class ListingService {
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    private User:UserService,
    private storageRef:any)
     {
      
    }


  getCategories():FirebaseListObservable<any> {
    
    return this.afDB.list('/catergorie/'+this.User.getUserUid())

  }
  getShoppingCarts():FirebaseListObservable<any> {
     console.log('listing shoppingcart','/shoppingCarts/'+this.User.getUserUid());
    return this.afDB.list('conti/'+this.User.getUserUid()+'/0'+'/shoppingCarts/');

  }

  getData(): Promise<ListingModel> {
    return this.http.get('./assets/example_data/listing.json') //TODO leggere ramo spese in firebase
     .toPromise()
     .then(response => response.json() as ListingModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
