import { ProfileModel } from '../pages/profile/profile.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(
  private user: ProfileModel,
){}
  setUser(user){
    this.user.user.name = user.displayName;
    this.user.user.image = user.photoURL;
    this.user.user.email = user.email;
    this.user.user.uid = user.uid;

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