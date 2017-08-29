
import { Injectable } from '@angular/core';
@Injectable()
export class UserModel {
  image: string;
  location: string;
  about: string;
  email: string;
  phone: string;
  name: string;
  website: string;
  uid:string;

  makeUser(user:any){
    this.image = user && user.image || "";
    this.location = user && user.location || "";
    this.about = user && user.about || "";
    this.email = user && user.email || "";
    this.phone = user && user.phone || "";
    this.website = user && user.website || "";
    this.name = user && user.name || "";
    this.uid = user && user.uid || "";
  }
  constructor(){

  }
}

export class ProfilePostModel {
  date: Date;
	image: string;
	description: string;
	likes: number = 0;
	comments: number = 0;
	liked: boolean = false;
}

export class ProfileModel {
  user: UserModel = new UserModel();
  following: Array<UserModel> = [];
  followers: Array<UserModel> = [];
  posts: Array<ProfilePostModel> = [];
}
