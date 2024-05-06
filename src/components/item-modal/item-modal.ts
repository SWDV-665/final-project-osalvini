import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { FileChooser } from '@ionic-native/file-chooser';

@Component({
  selector: 'item-modal',
  templateUrl: 'item-modal.html'
})
export class ItemModal {
  item: any = {};
  index: any;
  subTitle: string;
  mode: string;
  gpsCoordinates: string = "Loading...";

  constructor(
    private navParams: NavParams,
    private viewCtrl: ViewController,
    private camera: Camera,
    private geolocation: Geolocation,
    private fileChooser: FileChooser
  ) {
    this.item = this.navParams.get('item') || {};
    this.index = this.navParams.get('index');
    this.mode = this.navParams.get('mode');
    this.subTitle = this.navParams.get('subTitle');
    if(this.mode == "create"){
      this.loadGPS();
    }else{
      this.gpsCoordinates = this.item.latlong;
    }
    console.log('loaded item:', this.item);
    console.log('this.mode:', this.mode);

  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.item.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.error('Error taking photo:', err);
    });
  }

  loadGPS() {
    this.geolocation.getCurrentPosition().then((resp) => {
      if(this.mode == "create"){
      this.item.latlong = `${resp.coords.latitude}, ${resp.coords.longitude}`;
      this.gpsCoordinates = this.item.latlong;
      }
    }).catch((error) => {
      console.log('Error getting location', error);
      this.gpsCoordinates = "GPS unavailable";
    });
  }

  chooseImage() {
    this.fileChooser.open().then((uri) => {
      console.log('Image URI:', uri);
    }).catch(e => console.log('Error choosing file:', e));
  }

  saveItem() {
    this.item.subTitle = this.subTitle;
    this.viewCtrl.dismiss(this.item);
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
