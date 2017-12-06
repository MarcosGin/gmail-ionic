import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { NuevocorreoPage } from './../nuevocorreo/nuevocorreo';

@Component({
  selector: 'page-correo',
  templateUrl: 'correo.html',
})
export class CorreoPage {

  correoActual;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.correoActual = navParams.data;
  }

  showModal(type: string){
    let modal = this.modalCtrl.create(NuevocorreoPage, {type:type, correo: this.correoActual});
    modal.present();
  }

}
