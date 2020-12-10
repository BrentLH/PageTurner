import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Chapter1Page } from '../pages/chapter1/chapter1';
import { Chapter2Page } from '../pages/chapter2/chapter2';
import { Chapter3Page } from '../pages/chapter3/chapter3';
import { Chapter4Page } from '../pages/chapter4/chapter4';
import { TocPage } from '../pages/toc/toc';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Chapter1Page,
    Chapter2Page,
    Chapter3Page,
    Chapter4Page,
    TocPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Chapter1Page,
    Chapter2Page,
    Chapter3Page,
    Chapter4Page,
    TocPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
