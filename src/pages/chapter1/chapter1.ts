import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chapter2Page } from '../chapter2/chapter2';
import { TocPage } from '../toc/toc';

/**
 * Generated class for the Chapter1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter1',
  templateUrl: 'chapter1.html',
})
export class Chapter1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter1Page');
  }
  public gotoChapter2(){
    this.navCtrl.push(Chapter2Page);
  }
  public gotoToc(){
    this.navCtrl.push(TocPage);
  }

}
