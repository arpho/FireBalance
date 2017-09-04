import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ListingPage } from '../pages/listing/listing';
import { CreatePaymentPage } from '../pages/create-payment/create-payment';
import { CreateSupplierPage } from '../pages/create-supplier/create-supplier';
import { ListingModel } from '../pages/listing/listing.model';
import { FeedPage } from '../pages/feed/feed';
import { FollowersPage } from '../pages/followers/followers';
import { LayoutsPage } from '../pages/layouts/layouts';
import { FormsPage } from '../pages/forms/forms';
import { LoginPage } from '../pages/login/login';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { SchedulePage } from '../pages/schedule/schedule';
import { AdsPage } from '../pages/ads/ads';
import { List1Page } from '../pages/list-1/list-1';
import { List2Page } from '../pages/list-2/list-2';
import { GridPage } from '../pages/grid/grid';
import { FormLayoutPage } from '../pages/form-layout/form-layout';
import { FiltersPage } from '../pages/filters/filters';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { FormValidationsPage } from '../pages/form-validations/form-validations';
import { FornitoriPage } from '../pages/fornitori/fornitori';
import { PreloadImage } from '../components/preload-image/preload-image';
import { BackgroundImage } from '../components/background-image/background-image';
import { ShowHideContainer } from '../components/show-hide-password/show-hide-container';
import { ShowHideInput } from '../components/show-hide-password/show-hide-input';
import { ColorRadio } from '../components/color-radio/color-radio';
import { CounterInput } from '../components/counter-input/counter-input';
import { Rating } from '../components/rating/rating';
import { GoogleMap } from '../components/google-map/google-map';
import {MdButtonModule, MdCheckboxModule,MdIconModule,MdIconRegistry,MdSpinner,MdFab,MdSlideToggleModule} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {SuiModule} from 'ng2-semantic-ui';
import {Subject} from 'rxjs/Subject';
import { FeedService } from '../pages/feed/feed.service';
import { ListingService } from '../pages/listing/listing.service';
import { ProfileService } from '../pages/profile/profile.service';
import { NotificationsService } from '../pages/notifications/notifications.service';
import { List1Service } from '../pages/list-1/list-1.service';
import { List2Service } from '../pages/list-2/list-2.service';
import { ScheduleService } from '../pages/schedule/schedule.service';
import { FacebookLoginService } from '../pages/facebook-login/facebook-login.service';
import { GoogleLoginService } from '../pages/google-login/google-login.service';
import { TwitterLoginService } from '../pages/twitter-login/twitter-login.service';
import { GoogleMapsService } from '../pages/maps/maps.service';
import { CategoriesService } from '../pages/categories/categories.service';
import { ShoppingCartService } from '../pages/shopping-cart/shopping-cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import { EmailComposer } from '@ionic-native/email-composer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Toast } from '@ionic-native/toast';

// Functionalities
import { FunctionalitiesPage } from '../pages/functionalities/functionalities';
import { MapsPage } from '../pages/maps/maps';
import { FacebookLoginPage } from '../pages/facebook-login/facebook-login';
import { GoogleLoginPage } from '../pages/google-login/google-login';
import { TwitterLoginPage } from '../pages/twitter-login/twitter-login';
import { ContactCardPage } from '../pages/contact-card/contact-card';
import { VideoPlaylistPage } from '../pages/video-playlist/video-playlist';
import { CategoriesPage } from '../pages/categories/categories';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart';
import { VideoPlayerModule } from '../components/video-player/video-player.module';
import { ValidatorsModule } from '../components/validators/validators.module';
import { FirebaseApp } from 'angularfire2';

import { LanguageService } from '../providers/language/language.service';
import { UserService } from './user.service';
import { PaymentsService } from '../pages/payments/payments.service';
import { ProfileModel } from '../pages/profile/profile.model';
import { UserModel } from '../pages/profile/profile.model';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoriesSelectorComponent} from '../components/categories-selector/categories-selector';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import { CategoryWudItemComponent } from '../components/category-wud-item/category-wud-item'; 
import { SuppliersService } from '../pages/fornitori/fornitori.service'
import { FornitoriWudItemComponent } from '../components/fornitori-wud-item/fornitori-wud-item';
import { PaymentsPage } from '../pages/payments/payments';
import {CategoriesSelectorPage} from '../pages/categories-selector/categories-selector';
import { PaymentWudComponent } from '../components/payment-wud/payment-wud';
import { ShoppingCartWudItemComponent } from '../components/shopping-cart-wud-item/shopping-cart-wud-item';
import { FieldFilterComponent } from '../components/field-filter/field-filter';
import { UtilitiesService } from './utilities.service';
import { HelloMaterialComponent } from '../components/hello-material/hello-material';
import { CategoryComponent } from '../components/category/category';
import { SelectedCategoryComponent } from '../components/selected-category/selected-category';
import { CategoryModel } from '../components/category/category.model';
import { SelectedCategoriesListComponent } from '../components/selected-categories-list/selected-categories-list';
import { SelectableCategoriesListComponent } from '../components/selectable-categories-list/selectable-categories-list';
import { SelectableCategoryComponent } from '../components/selectable-category/selectable-category';
import { SelectorComponent } from '../components/selector/selector';
import { SimpleitemComponent } from '../components/simpleitem/simpleitem';
import { ListItemsComponent } from '../components/list-items/list-items';
import { SelectedItemComponent } from '../components/selected-item/selected-item';
export function createTranslateLoader(http: Http) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
 const googleKey = "AIzaSyATOf9HX67HaKlMQU0V7qUvrCe0McNSo40";
 const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCo8vHpRDMa_JsS5J6_vmLTbVNv8eMamgU",
    authDomain: "fir-6062c.firebaseapp.com",
    databaseURL: "https://fir-6062c.firebaseio.com",
    projectId: "fir-6062c",
    storageBucket: "fir-6062c.appspot.com",
    messagingSenderId: "84418489236"
};
export const firebaseConfig = {
  apiKey: "AIzaSyCo8vHpRDMa_JsS5J6_vmLTbVNv8eMamgU",
    authDomain: "fir-6062c.firebaseapp.com",
    databaseURL: "https://fir-6062c.firebaseio.com",
    projectId: "fir-6062c",
    storageBucket: "fir-6062c.appspot.com",
    messagingSenderId: "84418489236"
};




@NgModule({
  declarations: [
    CategoriesSelectorPage,
    CreateSupplierPage,
    CreatePaymentPage,
    ShoppingCartPage,
    PaymentsPage,
    FornitoriPage,
    CategoryItemComponent,
    MyApp,
    ListingPage,
    FeedPage,
    FollowersPage,
    LayoutsPage,
    FormsPage,
    LoginPage,
    CategoriesPage,
    NotificationsPage,
    ProfilePage,
    TabsNavigationPage,
    WalkthroughPage,
    SettingsPage,
    SignupPage,
    ForgotPasswordPage,
    SchedulePage,
    List1Page,
    List2Page,
    GridPage,
    FormLayoutPage,
    FiltersPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    MapsPage,
    FunctionalitiesPage,
    FacebookLoginPage,
    GoogleLoginPage,
    ContactCardPage,
    TwitterLoginPage,
		AdsPage,
		FormValidationsPage,
		VideoPlaylistPage,

    PreloadImage,
    BackgroundImage,
    ShowHideContainer,
    ShowHideInput,
    ColorRadio,
    CounterInput,
    Rating,
    GoogleMap,
    
    CategoryItemComponent,
    CategoriesSelectorComponent,
    ShoppingCartItemComponent,
    CategoryWudItemComponent,
    FornitoriWudItemComponent,
    PaymentWudComponent,
    ShoppingCartWudItemComponent,
    FieldFilterComponent,
    HelloMaterialComponent,
    CategoryComponent,
    SelectedCategoryComponent,
    SelectedCategoriesListComponent,
    SelectableCategoriesListComponent,
    SelectableCategoryComponent,
    SelectableCategoryComponent,
    SelectorComponent,
    SimpleitemComponent,
    ListItemsComponent,
    SelectedItemComponent,
  ],
  imports: [
    MdIconModule,
    ReactiveFormsModule,
    BrowserModule,
    MdIconModule,
    MdButtonModule,
    MdCheckboxModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
		TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
      	useFactory: (createTranslateLoader),
        deps: [Http]
		    }
		}),
		VideoPlayerModule,
		ValidatorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CategoriesSelectorPage,
    CreateSupplierPage,
    CreatePaymentPage,
    ShoppingCartPage,
    PaymentsPage,
    FornitoriPage,
    CategoriesPage,
    MyApp,
    ListingPage,
    FeedPage,
    FollowersPage,
    LayoutsPage,
    FormsPage,
    LoginPage,
    NotificationsPage,
    ProfilePage,
    TabsNavigationPage,
    WalkthroughPage,
    SettingsPage,
    ForgotPasswordPage,
    SignupPage,
    SchedulePage,
    List1Page,
    List2Page,
    GridPage,
    FormLayoutPage,
    FiltersPage,
    TermsOfServicePage,
    PrivacyPolicyPage,
    MapsPage,
    FunctionalitiesPage,
    FacebookLoginPage,
    GoogleLoginPage,
    ContactCardPage,
    TwitterLoginPage,
		AdsPage,
		FormValidationsPage,
		VideoPlaylistPage
  ],
  providers: [
    {provide:"GoogleKey",useValue: googleKey},
    {provide:"FIREBASE_CONFIG",useValue:FIREBASE_CONFIG},
    Subject,
    MdFab,
    MdSpinner,
    MdIconRegistry,
    UtilitiesService,
    Toast,
    PaymentsService,
    
    SuppliersService,
    UserService,
    FeedService,
    ListingService,
    ProfileService,
    ListingModel,
    ProfileModel,
    CategoryModel,
    UserModel,
    NotificationsService,
    List1Service,
    List2Service,
    ScheduleService,
    ShoppingCartService,
    CategoriesService,
    FacebookLoginService,
    GoogleLoginService,
    TwitterLoginService,
    GoogleMapsService,
		LanguageService,

	  SplashScreen,
	  StatusBar,
    SocialSharing,
    NativeStorage,
    InAppBrowser,
    Facebook,
    GooglePlus,
    Keyboard,
    Geolocation,
    TwitterConnect,
		AdMobFree,
		AppRate,
		ImagePicker,
		Crop,
		EmailComposer
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(/*private mdIconRegistry: MdIconRegistry,*/ private domSanitizer: DomSanitizer){
   // mdIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));
}
}
