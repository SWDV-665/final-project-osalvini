import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['/src/components/header/header.component.scss'],
})

export class HeaderComponent {
  public currentTitle: string = '';

  constructor(private navCtrl: NavController) {
    this.updateTitleBasedOnCurrentPage();

    this.navCtrl.viewDidEnter.subscribe((view) => {
      this.updateTitleBasedOnCurrentPage();
    });
  }

  updateTitleBasedOnCurrentPage() {
    let activeView = this.navCtrl.getActive();

    if (activeView) {
      console.log('Actual Page name: ', activeView.component.name)
      switch (activeView.component.name) {
        case 'AboutPage':
          this.currentTitle = 'About Fishable';
          break;
        case 'HomePage':
          this.currentTitle = 'Fishable Profile';
          break;
        case 'RiverAccessPage':
          this.currentTitle = 'Find River Access';
          break;
        case 'ContactPage':
          this.currentTitle = 'Reach Our Team';
          break;
        case 'FeedPage':
          this.currentTitle = 'Community Feed';
          break;
        default:
          this.currentTitle = 'Fishable';
          break;
      }
    }
  }
}
