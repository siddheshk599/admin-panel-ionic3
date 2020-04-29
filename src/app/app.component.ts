import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProductService } from './services/product.service';
import { AdminProfilePage } from '../pages/admin-profile/admin-profile';
import { ModalPage } from '../pages/modal/modal';
import { NoInternetPage } from '../pages/no-internet/no-internet';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = NoInternetPage;
  menuList = [];
  pageText;

  @ViewChild('content') nav: Nav; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public productService: ProductService, public modalCtrl: ModalController) {
      platform.ready().then(() => {
        statusBar.styleDefault();
        splashScreen.hide();
      });
    }

    ngOnInit() {
      this.menuList = this.productService.getTextImageList();
    }
  
    goToPage(index) {
      this.pageText = this.productService.getSpecificDetailText(index);
      if(this.pageText === "Admin Profile") {
        this.nav.push(AdminProfilePage);
        this.nav.setRoot(AdminProfilePage);
      } else if(this.pageText === "Dashboard") {
        this.nav.push(DashboardPage);
        this.nav.setRoot(DashboardPage);
      } else {
        console.log(this.pageText);
      }
    }
  
    showModal() {
      let modal = this.modalCtrl.create(ModalPage);
      modal.present()
    }
}