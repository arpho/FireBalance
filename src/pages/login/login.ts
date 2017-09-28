import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

import { FacebookLoginService } from '../facebook-login/facebook-login.service';
import { GoogleLoginService } from '../google-login/google-login.service';
import { TwitterLoginService } from '../twitter-login/twitter-login.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {UserService} from '../../app/user.service';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { Toast } from '@ionic-native/toast';
import { UtilitiesService} from '../../app/utilities.service';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: FormGroup;
  main_page: { component: any };
  loading: any;
  logging:any;


  constructor(
    private utilities: UtilitiesService,
    private toast: Toast, 
    public plt: Platform,
    public nav: NavController,
    public facebookLoginService: FacebookLoginService,
    public googleLoginService: GoogleLoginService,
    public twitterLoginService: TwitterLoginService,
    private afAuth: AngularFireAuth, private fb: Facebook, private platform: Platform,
     afDB: AngularFireDatabase,
     private User:UserService,
    public loadingCtrl: LoadingController
  ) {
    this.main_page = { component: TabsNavigationPage };
    this.logging = false;
    this.login = new FormGroup({
      email: new FormControl('damicogiuseppe77@gmail.com', Validators.required),
      password: new FormControl('vilu7240', Validators.required)
    });
  }

  doLogin(){
    //this.nav.setRoot(this.main_page.component);
    console.log('login',this.login.value);
    this.logging = true
    this.User.loginUser(this.login.value)
    .then(user=>{
      console.log('login ok',user);
      this.logging = false;
      this.User.setUser(user);
      this.nav.setRoot(this.main_page.component);
      this.utilities.showToast('benvenuto '+user.email,'5000','top',(txt)=>{
                                                                              console.log(txt);
                                                                            })
    })
    .catch(err=>{
      console.log('login no ok',err);
      this.logging = false;
    //  if(this.plt.is('android')){
        this.utilities.showToast(`problemi di autenticazione`, '5000', 'center',toast => {
          console.log(toast);
        });
    
    
    })

  }


    signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {
                        console.log('success',res)
                        this.User.setUser(res.user);
                        // user is previously logged with FB and we have his data we will let him access the app
                        this.nav.setRoot(this.main_page.component);
                    //    this.UserService.setUser(user);
                     //   console.log('user logged',UserService.isUserLogged());
                      }).catch((error) => { console.log('failed login',error) });
    }
  }

  doFacebookLogin() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
    // let this = this;


    this.facebookLoginService.getFacebookUser()
    .then((data) => {
      console.log('utente autenticato',data);
       // user is previously logged with FB and we have his data we will let him access the app
      this.nav.setRoot(this.main_page.component);
    }, (error) => {
      //we don't have the user data so we will ask him to log in
      this.facebookLoginService.doFacebookLogin()
      .then((res) => {
        this.loading.dismiss();
        this.nav.setRoot(this.main_page.component);
      }, (err) => {
        console.log("Facebook Login error", err);
      });
    });
  }

  doGoogleLogin() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app

    this.googleLoginService.trySilentLogin()
    .then((data) => {
       // user is previously logged with Google and we have his data we will let him access the app
      this.nav.setRoot(this.main_page.component);
    }, (error) => {
      //we don't have the user data so we will ask him to log in
      this.googleLoginService.doGoogleLogin()
      .then((res) => {
        this.loading.dismiss();
        this.nav.setRoot(this.main_page.component);
      }, (err) => {
        console.log("Google Login error", err);
      });
    });
  }

  doTwitterLogin(){
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app

    this.twitterLoginService.getTwitterUser()
    .then((data) => {
       // user is previously logged with FB and we have his data we will let him access the app
      this.nav.setRoot(this.main_page.component);
    }, (error) => {
      //we don't have the user data so we will ask him to log in
      this.twitterLoginService.doTwitterLogin()
      .then((res) => {
        this.loading.dismiss();
        this.nav.setRoot(this.main_page.component);
      }, (err) => {
        console.log("Twitter Login error", err);
      });
    });
  }

  goToSignup() {
    this.nav.push(SignupPage);
  }

  goToForgotPassword() {
    this.nav.push(ForgotPasswordPage);
  }

}
