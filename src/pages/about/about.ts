import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['/src/pages/about/about.scss']
})

export class AboutPage {

  title = "About";

  constructor(public navCtrl: NavController) {

  }



}
