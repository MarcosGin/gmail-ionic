import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from '../../providers/correos/correos';
import { CorreoPage } from '../correo/correo';
import { NuevocorreoPage } from '../nuevocorreo/nuevocorreo';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-enviados',
  templateUrl: 'enviados.html',
})
export class EnviadosPage {

  listSends;
  correoPage = CorreoPage;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public correos: CorreosProvider,
              public modalCtrl: ModalController,
              public storage: Storage) {
                //this.listSends = correos.enviados;
  }

  ionViewWillEnter(){
    this.storage.get('sends')
                .then((sends)=>{ 
                  if(sends == null){
                    this.listSends = [];
                    this.correos.enviados = [];
                  }else{
                    this.listSends = sends;
                    this.correos.enviados = this.listSends;
                  }
                 
                })
                .catch(err => { console.log(err); })
  }


  showEmail(correo: any) {
    this.navCtrl.push(this.correoPage, correo);
  }

  create() {
    let modal = this.modalCtrl.create(NuevocorreoPage, { type: 'Create', correo: {} });
    modal.present();
  }
}
