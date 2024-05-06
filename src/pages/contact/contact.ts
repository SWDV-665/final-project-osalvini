import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DataService } from '../../providers/data-service/data-service';

interface Category {
  name: string;
  subTitle: string;
}

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['/src/pages/contact/contact.scss']
})
export class ContactPage {
  email: string;
  message: string;
  title = 'Reach Our Team';
  categories: Category[] = [
    { name: 'catch', subTitle: "My Catches" },
    { name: 'location', subTitle: "Favorite Fishing Spots" },
    { name: 'bait', subTitle: "Bait History" },
    { name: 'lure', subTitle: "My Lures" },
    { name: 'email', subTitle: "Reach Our Team" },
  ];

  constructor(
    public navCtrl: NavController,
    private dataService: DataService,
    private toastCtrl: ToastController
  ) { }

  getSubTitle(name: string): string {
    const category = this.categories.find(c => c.name === name);
    return category ? category.subTitle : '';
  }

  sendEmail() {
    if (this.email.length < 8) {
      this.showToast('Email invalid');
      return;
    }

    if (this.message.length < 20) {
      this.showToast('Message invalid');
      return;
    }

    let emailMessage = { email: this.email, message: this.message };

    this.dataService.sendEmail(emailMessage).subscribe(result => {
      this.showToast('Email sent successfully');
      this.email = '';
      this.message = '';
    }, error => {
      console.error('Error send email message: ', error);
      this.showToast('Failed to send email');
    });
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
