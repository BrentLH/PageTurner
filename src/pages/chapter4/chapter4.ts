import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TocPage } from '../toc/toc';
import { Chapter3Page } from '../chapter3/chapter3';
/**
 * Generated class for the Chapter4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter4',
  templateUrl: 'chapter4.html',
})
export class Chapter4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter4Page');
  }
  public gotoToc(){
    this.navCtrl.push(TocPage);
  }
  public gotoChapter3(){
    this.navCtrl.push(Chapter3Page);
  }
}
