import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter1Page } from '../chapter1/chapter1';
import { Chapter2Page } from '../chapter2/chapter2';
import { Chapter3Page } from '../chapter3/chapter3';
import { Chapter4Page } from '../chapter4/chapter4';
import { HomePage } from '../home/home';

/**
 * Generated class for the TocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',

})
export class TocPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }
  public gotoChapter1(){
    this.navCtrl.push(Chapter1Page);
  }
  public gotoChapter2(){
    this.navCtrl.push(Chapter2Page);
  }
  public gotoChapter3(){
    this.navCtrl.push(Chapter3Page);
  }
  public gotoChapter4(){
    this.navCtrl.push(Chapter4Page);
  }
  public gotoHome(){
    this.navCtrl.push(HomePage);
  }
}
