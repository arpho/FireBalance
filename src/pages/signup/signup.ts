import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';

import { TabsNavigationPage } from '../tabs-navigation/tabs-navigation';

import { FacebookLoginService } from '../facebook-login/facebook-login.service';
import { GoogleLoginService } from '../google-login/google-login.service';
import { TwitterLoginService } from '../twitter-login/twitter-login.service';
import { Toast } from '@ionic-native/toast';
import {UserService} from '../../app/user.service';
import { LoginPage } from '../login/login';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: FormGroup;
  main_page: { component: any };
  loading: any;

  constructor(
    
    private toast: Toast, 
    private platform: Platform,
    private User:UserService,
    public nav: NavController,
    public modal: ModalController,
    public facebookLoginService: FacebookLoginService,
    public googleLoginService: GoogleLoginService,
    public twitterLoginService: TwitterLoginService,
    public loadingCtrl: LoadingController
  ) {
    this.main_page = { component: TabsNavigationPage };
    

    this.signup = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [ Validators.required,
        Validators.minLength(6)]),
      confirm_password: new FormControl('', [ Validators.required,
        Validators.minLength(6)])
    });
    this.signup.setValidators(this.passwordMatchValidator);
  }

 
  /*passwordMatch(c: AbstractControl) {
    return c.value.password === c.value.confirm_password ? null : {'nomatch': true};
  }*/

  doSignup(){
    //this.nav.setRoot(this.main_page.component);
    console.log('signup');
    
    this.User.signupUser(this.signup.value)
    .then(user=>{
      console.log("user creato",user)
      this.nav.push(LoginPage);
    })
    .catch(err=>{
      console.log("errore creando l'utente",err);
    })
  }

  doFacebookSignup() {
    this.loading = this.loadingCtrl.create();
    // Here we will check if the user is already logged in
    // because we don't want to ask users to log in each time they open the app
    let env = this;

    this.facebookLoginService.getFacebookUser()
    .then(function(data) {
       // user is previously logged with FB and we have his data we will let him access the app
      env.nav.setRoot(env.main_page.component);
    }, function(error){
      //we don't have the user data so we will ask him to log in
      env.facebookLoginService.doFacebookLogin()
      .then(function(res){
        env.loading.dismiss();
        env.nav.setRoot(env.main_page.component);
      }, function(err){
        console.log("Facebook Login error", err);
        env.loading.dismiss();
      });
    });
  }

  doTwitterSignup() {
    console.log('errori nella password',this.signup.controls.password.errors);
    console.log('errori nella mail',this.signup.controls.email.errors);
    console.log('errori nella password_match',this.signup.controls.confirm_password.errors);
    console.log('errori nella form',this.signup.errors);
    if (this.platform.is('andrroid')) {
      this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
  }
  }

  passwordMatchValidator(control:AbstractControl):{[key:string]:any}{
    return control.value.password == control.value.confirm_password ? null: {'noMatch':'le password non coincidono'};
  }

  doGoogleSignup() {
    this.loading = this.loadingCtrl.create();

    // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
    let env = this;

    this.googleLoginService.trySilentLogin()
    .then(function(data) {
       // user is previously logged with Google and we have his data we will let him access the app
      env.nav.setRoot(env.main_page.component);
    }, function(error){
      //we don't have the user data so we will ask him to log in
      env.googleLoginService.doGoogleLogin()
      .then(function(res){
        env.loading.dismiss();
        env.nav.setRoot(env.main_page.component);
      }, function(err){
        console.log("Google Login error", err);
        env.loading.dismiss();
      });
    });
  }

  showTermsModal() {
    let modal = this.modal.create(TermsOfServicePage);
    modal.present();
  }

  showPrivacyModal() {
    let modal = this.modal.create(PrivacyPolicyPage);
    modal.present();
  }

}
