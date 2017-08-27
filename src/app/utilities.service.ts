
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Toast } from '@ionic-native/toast';
@Injectable()
export class UtilitiesService{
    constructor(
        private plt:Platform,
        private toast: Toast,
        public geolocation: Geolocation
    ) {};
    isPlatform(platform:string): boolean{
        return this.plt.is(platform);
    }
    
    isAndroid(): boolean {
        return this.isPlatform('android');
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