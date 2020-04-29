import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-admin-profile',
  templateUrl: 'admin-profile.html',
})
export class AdminProfilePage {

  tableData = [{
    asgnTo: 'Jyoti Vishwakarma',
    asgnBy: 'Shraddha Jadhav',
    creditPoints: '1000',
    option: 'Credit',
    viewImage: 'assets/svg/eyeGreen.svg'
  },
  {
    asgnTo: 'Jyoti Vishwakarma',
    asgnBy: 'Shraddha Jadhav',
    creditPoints: '1000',
    option: 'Credit',
    viewImage: 'assets/svg/eyeGreen.svg'
  },
  {
    asgnTo: 'Jyoti Vishwakarma',
    asgnBy: 'Shraddha Jadhav',
    creditPoints: '1000',
    option: 'Credit',
    viewImage: 'assets/svg/eyeGreen.svg'
  },
  {
    asgnTo: 'Jyoti Vishwakarma',
    asgnBy: 'Shraddha Jadhav',
    creditPoints: '1000',
    option: 'Credit',
    viewImage: 'assets/svg/eyeGreen.svg'
  },
  {
    asgnTo: 'Jyoti Vishwakarma',
    asgnBy: 'Shraddha Jadhav',
    creditPoints: '1000',
    option: 'Credit',
    viewImage: 'assets/svg/eyeGreen.svg'
  },
  {
    asgnTo: 'Jyoti Vishwakarma',
    asgnBy: 'Shraddha Jadhav',
    creditPoints: '1000',
    option: 'Credit',
    viewImage: 'assets/svg/eyeGreen.svg'
  },
  {
    asgnTo: 'Jyoti Vishwakarma',
    asgnBy: 'Shraddha Jadhav',
    creditPoints: '1000',
    option: 'Credit',
    viewImage: 'assets/svg/eyeGreen.svg'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}