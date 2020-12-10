import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter4Page } from '../chapter4/chapter4';
import { TocPage } from '../toc/toc';
import { Chapter2Page } from '../chapter2/chapter2';
/**
 * Generated class for the Chapter3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter3',
  templateUrl: 'chapter3.html',
})
export class Chapter3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter3Page');
  }
  public gotoChapter4(){
    this.navCtrl.push(Chapter4Page);
  }
  public gotoToc(){
    this.navCtrl.push(TocPage);
  }
  public gotoChapter2(){
    this.navCtrl.push(Chapter2Page);
  }
}
