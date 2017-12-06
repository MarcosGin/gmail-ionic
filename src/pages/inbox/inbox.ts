import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreosProvider } from './../../providers/correos/correos';
import { CorreoPage } from '../correo/correo';
import { NuevocorreoPage } from './../nuevocorreo/nuevocorreo';

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  listaCorreos:Object;
  correoPage = CorreoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public correos: CorreosProvider, public modalCtrl: ModalController) {
      this.listaCorreos = correos.lista;
  }

  showEmail(correo: any){
    this.navCtrl.push(this.correoPage, correo);
  }

  create(){
    let modal = this.modalCtrl.create(NuevocorreoPage, {type: 'Create', correo: {}});
    modal.present();
  }

}
