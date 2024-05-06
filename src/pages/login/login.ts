import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth-service/auth-service';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: './login.html',
  styleUrls: ['/src/pages/login/login.scss']
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const token = localStorage.getItem('token');
    const expiresAt = localStorage.getItem('expires_at');
    if (token && expiresAt && Date.now() < +expiresAt) {
      this.navCtrl.push(TabsPage);
      this.showToast('Login successful!');
    }
  }

  onLogin(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      () => {
        this.navCtrl.push(TabsPage);
        this.showToast('Login successful!');
      },
      error => {
        console.log('Login error:', error);
        this.showToast('Login failed. Please try again.');
      }
    );
  }

  onRegister(form: NgForm) {
    this.authService.register(form.value.email, form.value.password).subscribe(
      () => {
        this.navCtrl.push(TabsPage);
        this.showToast('Login successful!');
      },
      error => {
        console.log('Registration error:', error);
        this.showToast('Registration failed. Please try again.');
      }
    );
  }

  private showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
