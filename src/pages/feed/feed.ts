import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataService } from '../../providers/data-service/data-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  styleUrls: ['/src/pages/feed/feed.scss']
})

export class FeedPage {

  title = "Community Feed";
  items = [];
  errorMessage: string;
  dataChangedSubscription: Subscription;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataService, public inputDialogService: InputDialogServiceProvider, public socialSharing: SocialSharing) {

  }

}
