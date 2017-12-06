import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastProvider } from './../../providers/toast/toast';
import { CorreosProvider } from '../../providers/correos/correos';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-nuevocorreo',
  templateUrl: 'nuevocorreo.html',
})
export class NuevocorreoPage {
  type: string;
  correo: any;
  name: string = 'Marcos Gin';
  from: string = 'marcosgin291@gmail.com';
  to: string = '';
  reason: string = '';
  message: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public viewCtrl: ViewController, public toastCtrl: ToastProvider,
              public correos: CorreosProvider, public storage: Storage ) {
    this.type = navParams.get('type');
    this.correo = navParams.get('correo');

    if(this.type == 'Reply'){
      this.to = this.correo.email;
      this.reason = `Re: ${this.correo.reason}`;
    }
    if(this.type == 'Forward'){
      this.reason = this.correo.reason;      
    }
  }

  close(){
    this.viewCtrl.dismiss();
  }

  send(){
    let email = {
      name: this.name,
      from: this.from,
      to: this.to,
      reason: this.reason,
      message: this.message,
      date: new Date()
    }
    console.log(`Mensaje enviado - ${JSON.stringify(email)}`);
    this.correos.enviados.push(email);
    this.storage.set('sends', this.correos.enviados)
                .then()
                .catch(err => { console.log(err); })
    this.close();
    this.toastCtrl.createToast('Correo enviado');
  }
}
