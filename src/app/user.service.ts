import { UtilitiesService } from './utilities.service';
import {UserModel } from '../pages/profile/profile.model';
import { Injectable,Inject } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import {Subject} from 'rxjs';
@Injectable()
export class UserService {
  constructor(
    @Inject('FIREBASE_CONFIG') private FirebaseConfig,
  private user: UserModel,
  public Utilities:UtilitiesService,
  // stream che pubblica nuovi messaggi solo una volta
  public currentUser: Subject<UserModel> 
){
  const firebaseConfig = {
    apiKey: "AIzaSyCo8vHpRDMa_JsS5J6_vmLTbVNv8eMamgU",
      authDomain: "fir-6062c.firebaseapp.com",
      databaseURL: "https://fir-6062c.firebaseio.com",
      projectId: "fir-6062c",
      storageBucket: "fir-6062c.appspot.com",
      messagingSenderId: "84418489236"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig)
  }

}
subscribeUser(f:(a:any)=>{}) {
  this.currentUser.subscribe(f);

}
  setUser(user){
    this.user.makeUser(user);
    this.currentUser.next(this.user); // aggiungo l'utente allo stream
    /*this.user.user.name = user.displayName;
    this.user.user.image = user.photoURL;
    this.user.user.email = user.email;
    this.user.user.uid = user.uid;*/

  }
  signupUser(user: any){
    console.log('signup service',user);
   
    return firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
  }
  loginUser(user:any) {
    return firebase.auth().signInWithEmailAndPassword(user.email,user.password)
  }
  getUserUid():String{
    return this.user.uid;
  }

  isUserLogged():Boolean{
    return this.user == null; 
  }

  getUser():UserModel{
    return this.user;
  }
    


}