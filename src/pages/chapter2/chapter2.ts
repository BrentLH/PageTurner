import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter3Page } from '../chapter3/chapter3';
import { TocPage } from '../toc/toc';
import { Chapter1Page } from '../chapter1/chapter1';
/**
 * Generated class for the Chapter2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter2',
  templateUrl: 'chapter2.html',
})
export class Chapter2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter2Page');
  }
  public gotoChapter3(){
    this.navCtrl.push(Chapter3Page);
  }
  public gotoToc(){
    this.navCtrl.push(TocPage);
  }
  public gotoChapter1(){
    this.navCtrl.push(Chapter1Page);
  }
}
