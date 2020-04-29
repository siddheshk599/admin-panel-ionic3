import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from '../../app/services/product.service'
import { AdminProfilePage } from '../admin-profile/admin-profile';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  public gridList = [];
  public index: number;
  public pageText;
  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService) {
    
  }

  ngOnInit() {
    this.gridList = this.productService.getTextImageList();
  }

  getPageTitle(index) {
    this.pageText = this.productService.getSpecificDetailText(index);
    if(this.pageText === "Admin Profile") {
      this.navCtrl.push(AdminProfilePage);
      this.navCtrl.setRoot(AdminProfilePage);
    } else {
      console.log(this.pageText);
    }
  }
}