import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataService } from '../../providers/data-service/data-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Subscription } from 'rxjs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/src/pages/home/home.scss']
})

export class HomePage {

  title = "Fishable Profile";
  subTitle = "My Lures"
  items = [];
  errorMessage: string;
  dataChangedSubscription: Subscription;

  userProfile = {
    image: 'assets/imgs/user.png',
    name: 'User Profile',
    location: 'Sacramento, California'
  };

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataService, public inputDialogService: InputDialogServiceProvider, public socialSharing: SocialSharing) {

  }

}
