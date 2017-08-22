
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
@Injectable()
export class UtilitiesService{
    constructor(
        private plt:Platform,
        private toast: Toast
    ) {};
    
    isAndroid(): boolean {
        return this.plt.is('android');
    }

    showToast(message:string,duration:string,position:string,next:(any)=>void) {
        
    if(this.isAndroid())
        this.toast.show(message,duration,position).subscribe(next);
    else
        next('toast no android');

    }
}