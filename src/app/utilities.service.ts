
import { Injectable,Inject } from '@angular/core';
import {Http} from '@angular/http';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Toast } from '@ionic-native/toast';
import * as _ from 'lodash'; 
@Injectable()
export class UtilitiesService{
    public googleKey:string;
    constructor(
        @Inject('GoogleKey') private GoogleKey,
        public http:Http,
        private plt:Platform,
        private toast: Toast,
        public geolocation: Geolocation
    ) {
        this.googleKey = GoogleKey;//"AIzaSyATOf9HX67HaKlMQU0V7qUvrCe0McNSo40";
    };
    isPlatform(platform:string): boolean{
        return this.plt.is(platform);
    }
    text4Switch(textTrue,textFalse,selector) {
        return  (selector==true) ? textTrue : textFalse;
    }

    regexFilter(filterString:string,value){
        var re = new RegExp(filterString,'i');
        if(filterString)
         { //console.log('match',categoria.title.match(re))
           return value.match(re)!=null;
          }
        else 
          return true;
        
      }

    
    
    isAndroid(): boolean {
        return this.isPlatform('android');
    }
    makeUrl(lat,long) {
        return  "https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(lat).concat(",").concat(long).concat("&key=").concat(this.googleKey);
    }
    inverseGeoLocation(lat, long) {
        var url = this.makeUrl(lat,long)
        return this.http.get(url);
    }
    makeAddress(resp) {
        return resp.results[0].formatted_address;
       
    }

    geolocalize(): Promise<any> {
        return this.geolocation.getCurrentPosition().catch((error) => {
            console.log('Error getting location', error);
            switch(error.code){
             case 0:
              this.showToast('Errore sconosciuto','6000','top',toast=>{console.log('toast',toast)});
              break;
              case 1:
               this.showToast("richiesta rifiutata dall'utente",'6000','top',toast=>{console.log('toast',toast)});
               break;
               case 2:
                this.showToast('La posizione non può essere determinata!','6000','top',toast=>{console.log('toast',toast)});
                break;
                case 3:
                 this.showToast('Timeout scaduto','6000','top',toast=>{console.log('toast',toast)});
                 break;
            }
          });;
      }

    showToast(message:string,duration:string,position:string,next:(any)=>void) {
        
    if(this.isAndroid())
        this.toast.show(message,duration,position).subscribe(next);
    else
        next('toast no android');

    }
}