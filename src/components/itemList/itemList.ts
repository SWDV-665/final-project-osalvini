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
  subTitle: string;
  name: string;
  items: Item[];
}

@Component({
  selector: 'components-itemList',
  templateUrl: 'itemList.html'
})

export class ItemList implements OnDestroy {

  categories: Category[] = [
    { name: 'catch', subTitle: "My Catches", items: [] },
    { name: 'location', subTitle: "Favorite Fishing Spots", items: [] },
    { name: 'lure', subTitle: "My Lures", items: [] },
    { name: 'bait', subTitle: "Bait History", items: [] }
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

  removeItem(subTitle, item) {
    if (!item || !subTitle) {
      console.error('Error: Item ID and subTitle parameters are required');
      return;
    }

    // Get item id
    const category = this.categories.find(c => subTitle === c.subTitle);
    const tablename = category.name;
    const pks = {
      'location': 'location_id',
      'catch': 'catch_id',
      'lure': 'lure_id',
      'bait': 'bait_id'
    };
    const pk = pks[tablename];
    let id = item[pk];

    console.log('Item ID: ', id, item)

    this.dataService.removeItem(subTitle, id).subscribe(() => {
      this.loadItems();
    },
      error => {
        console.error('Error removing item', error);
      });
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

  editItem(subTitle, item, mode = "edit") {
    console.log("Edit item ", subTitle, item)
    this.inputDialogService.showPrompt(subTitle, item, 'edit')
  }

  addItem(subTitle: string) {
    console.log('Launching', subTitle, ' modal.')
    this.inputDialogService.showPrompt(subTitle, {}, 'create')
  }
}

