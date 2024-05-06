import { Component, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataService } from '../../providers/data-service/data-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Subscription } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';


interface Item {
  id: number;
  name: string;
  description: string;
  price?: string;
  image?: string;
  type?: string;
}

interface Category {
  subTitle: string, items: Item[]
}

@Component({
  selector: 'components-feedListItem',
  templateUrl: 'feedListItem.html'
})

export class FeedListItem implements OnDestroy {

  categories: Category[] = [
    { subTitle: "Community Catches", items: [] },
    { subTitle: "Community Fishing Spots", items: [] },
    { subTitle: "Community Bait", items: [] },
    { subTitle: "Community Lures", items: [] }
  ];

  errorMessage: string;
  dataChangedSubscription: Subscription;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public dataService: DataService, public inputDialogService: InputDialogServiceProvider, public socialSharing: SocialSharing, private cdr: ChangeDetectorRef) {
    this.dataChangedSubscription = dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      if (dataChanged) {
        this.loadItems();
      }
    })
  }

  ngOnInit() {
    this.loadItems();
    this.dataChangedSubscription = this.dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      if (dataChanged) {
        this.loadItems();
      }
    });
  }

  ngOnDestroy() {
    if (this.dataChangedSubscription) {
      this.dataChangedSubscription.unsubscribe();
    }
  }

  loadItems() {
    this.categories.forEach(category => {

      this.dataService.getItems(category.subTitle)
        .subscribe(
          response => {
            this.categories.map((c) => {
              if (c.subTitle === response.subTitle) {
                c.subTitle = response.subTitle;
                c.items = response.items;
                return c
              }
              return c;
            })
          },
          error => {
            console.error('Error loading items:', error);
          }
        );

    });

    this.cdr.detectChanges();
  }

  shareItem(item, index) {
    console.log("sharing item: ", item, index)
    const toast = this.toastCtrl.create({
      message: "sharing item: " + index + " ...",
      duration: 3000,
      position: 'top'
    });
    toast.present();

    let message = "message";
    let subject = "Shared via Groceries app";

    this.socialSharing.share(message, subject).then(() => {
      console.log("Shared Successfully");
    }).catch((error) => {
      console.log("Error while sharing", error);
    });
  }

}

