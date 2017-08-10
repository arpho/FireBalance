import { Injectable, OnInit } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { AngularFireDatabase } from 'angularfire2/database';
import { ListingModel } from '../pages/listing/listing.model';
import {UserService} from '../../app/user.service';
import { FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class CategoriesService implements OnInit {
  constructor(public http: Http,
    private afDB: AngularFireDatabase,
    //,// produce uno strano errore no peovider for Observable 
    private User:UserService) {}

  ngOnInit() {
    this.afDB.list('categorie/'+this.User.getUserUid()).subscribe(data=>{
      console.log('categorie',data);
    })
 console.log('loaded categories');
  }

  getCategories():Observable<any> {
    return this.afDB.list('categorie/'+this.User.getUserUid());
  }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  pushNewCategory(categoria) {
   this.afDB.list('categorie/'+this.User.getUserUid()).push(categoria);
  }
  updateCategory(categoria) {
    this.afDB.list('categorie/'+this.User.getUserUid()).update(categoria.$key,categoria).then(e => {
      console.log('modificato categoria',e);
    });
  }
  trashCategory(categoria) {
    this.afDB.list('categorie/'+this.User.getUserUid()).remove(categoria.$key).then(e => {
      console.log('modificato categoria',e);
    });
  }






}