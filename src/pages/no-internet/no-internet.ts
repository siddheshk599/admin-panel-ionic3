import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-no-internet',
  templateUrl: 'no-internet.html',
})
export class NoInternetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.checkInternet();
  }

  checkInternet() {
    if(navigator.onLine) {
      this.navCtrl.setRoot(DashboardPage); 
    }
    else {
      this.navCtrl.setRoot(this.navCtrl.getActive().component);
    }
  }

}
