import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardPageModule } from '../pages/dashboard/dashboard.module';
import { NoInternetPageModule } from '../pages/no-internet/no-internet.module';
import { AdminProfilePageModule } from '../pages/admin-profile/admin-profile.module';
import { ProductService } from './services/product.service';
import { ModalPageModule } from '../pages/modal/modal.module';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DashboardPageModule,
    NoInternetPageModule,
    AdminProfilePageModule,
    ModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductService
  ]
})
export class AppModule {}
