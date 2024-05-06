import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera'
import { ApiService } from '../providers/api-service/api-service';
import { ItemList } from '../components/itemList/itemList'
import { FeedListItem } from '../components/feedListItem/feedListItem'
import { UploadImage } from '../components/uploadImage/uploadImage';
import { RiverAccessLocationComponent } from '../components/riverAccessLocation/river-access-location.component';
import { FileChooser } from '@ionic-native/file-chooser';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { TabsPage } from '../pages/tabs/tabs';
import { RiverAccessPage } from '../pages/riverAccess/riverAccess';
import { UserProfileComponent } from '../components/userProfile/user-profile.component';
import { HeaderComponent } from '../components/header/header.component';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service/auth-service';
import { DataService } from '../providers/data-service/data-service';

import { ItemModal } from '../components/item-modal/item-modal';
import { EmailComposer } from '@ionic-native/email-composer';
import { RiverMapComponent } from '../components/map/river-map.component'
import { GoogleMaps } from '@ionic-native/google-maps';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FeedPage,
    TabsPage,
    LoginPage,
    ItemList,
    FeedListItem,
    UploadImage,
    RiverAccessLocationComponent,
    UserProfileComponent,
    ItemModal,
    RiverAccessPage,
    RiverMapComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      platforms: {
        ios: { tabsPlacement: 'bottom' },
        android: { tabsPlacement: 'bottom' },
        windows: { tabsPlacement: 'bottom' }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FeedPage,
    TabsPage,
    LoginPage,
    ItemList,
    FeedListItem,
    UploadImage,
    RiverAccessLocationComponent,
    UserProfileComponent,
    ItemModal,
    RiverAccessPage,
    RiverMapComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InputDialogServiceProvider,
    SocialSharing,
    AuthService,
    DataService,
    Camera,
    FileChooser,
    Geolocation,
    ApiService,
    EmailComposer,
    GoogleMaps,
  ]
})
export class AppModule { }
