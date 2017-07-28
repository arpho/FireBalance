import { UserModel } from '../pages/profile/profile.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
private user: UserModel;
setUser(user){
  this.user.name = user.name;
  this.user.image = user.photoURL;
}

isUserLogged(){
  return this.user == null; 
}

getUser(){
  return this.user;
}
  constructor() { 
    
  }


}