import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, IonicApp } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  isEnabled: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private ionicApp: IonicApp) {
  }

  closeModal() {
    let activeModal = this.ionicApp._modalPortal.getActive();
    if(activeModal) {
      activeModal.dismiss();
      return;
    }
  }

  allowEdit() {
    this.isEnabled = true;
  }


}