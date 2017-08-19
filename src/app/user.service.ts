import { ProfileModel } from '../pages/profile/profile.model';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
@Injectable()
export class UserService {
  constructor(
  private user: ProfileModel,
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
    firebase.initializeApp(firebaseConfig)
  }

}
  setUser(user){
    this.user.user.name = user.displayName;
    this.user.user.image = user.photoURL;
    this.user.user.email = user.email;
    this.user.user.uid = user.uid;

  }
  signupUser(user: any){
    console.log('signup service',user);
   
    return firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
  }
  loginUser(user:any) {
    return firebase.auth().signInWithEmailAndPassword(user.email,user.password)
  }
  getUserUid():String{
    return this.user.user.uid;
  }

  isUserLogged():Boolean{
    return this.user == null; 
  }

  getUser():ProfileModel{
    return this.user;
  }
    


}