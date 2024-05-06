import { Injectable } from '@angular/core';
import { DataService } from '../data-service/data-service';
import { ModalController } from 'ionic-angular';
import { ItemModal } from '../../components/item-modal/item-modal';

@Injectable()

export class InputDialogServiceProvider {

  currentSubTitle: string;

  constructor(public modalCtrl: ModalController, public dataService: DataService) {
  }

  showPrompt(subTitle?, item?, mode = "create") {
    let modal = this.modalCtrl.create(ItemModal, { mode: mode, item: item, subTitle: subTitle });

    modal.onDidDismiss(data => {

      if (data && mode == "create") {
        this.dataService.addItem(data.subTitle, data).subscribe(
          () => console.log('Item updated successfully'),
          error => console.error('Error adding item:', error)
        );
      } else if (data && mode == "edit") {
        this.dataService.editItem(data.subTitle, data).subscribe(
          () => console.log('Item updated successfully'),
          error => console.error('Error adding item:', error)
        );
      }
    });
    modal.present();
  }


}
