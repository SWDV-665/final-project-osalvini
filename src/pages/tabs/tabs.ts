import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { RiverAccessPage } from '../riverAccess/riverAccess';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = FeedPage;
  tab3Root = HomePage;
  tab4Root = RiverAccessPage;
  tab5Root = ContactPage;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) { }

  logout() {
    console.log('logout')
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.showToast('You have been logged out.');
    this.navCtrl.setRoot(LoginPage);
  }

  private showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
