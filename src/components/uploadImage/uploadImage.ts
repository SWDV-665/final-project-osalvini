//Component file
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera'
import { ApiService } from '../../providers/api-service/api-service';

@Component({
  selector: 'upload-image',
  templateUrl: 'uploadImage.html'
  })

export class UploadImage {

userImg: any = '';
base64Img = '';
cameraOptions: CameraOptions = {
 quality: 100,
 destinationType: this.camera.DestinationType.DATA_URL,
 encodingType: this.camera.EncodingType.JPEG,
 mediaType: this.camera.MediaType.PICTURE,
 allowEdit: true
}
galleryOptions: CameraOptions = {
  quality: 100,
  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  destinationType: this.camera.DestinationType.DATA_URL,
  allowEdit: true
}

constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private camera: Camera, private apiService: ApiService) {
   platform.ready().then(() => {
  statusBar.styleDefault();
  splashScreen.hide();
 })
  this.userImg = 'assets/imgs/logo.png';
 }

 openCamera() {
  this.camera.getPicture(this.cameraOptions).then((imgData) => {
  console.log('image data =>  ', imgData);
  this.base64Img = 'data:image/jpeg;base64,' + imgData;
  this.userImg = this.base64Img;
  const itemId = "{{item.id}}";
  this.apiService.uploadImage(this.base64Img, itemId).subscribe(
    response => {
      console.log('Image uploaded successfully', response);
    },
    error => {
      console.error('Failed to upload image', error);
    }
  );
}, (err) => {
  console.log(err);
  })
 }
 openGallery() {
  this.camera.getPicture(this.galleryOptions).then((imgData) => {
   console.log('image data =>  ', imgData);
   this.base64Img = 'data:image/jpeg;base64,' + imgData;
   this.userImg = this.base64Img;
   }, (err) => {
   console.log(err);
   })
  }

uploadImageToServer(itemId: string) {
  if (this.base64Img) {
    this.apiService.uploadImage(this.base64Img, itemId).subscribe(
      response => {
        console.log('Upload successful', response);
      },
      err => {
        console.error('Upload failed', err);
      }
    );
  } else {
    console.log('No image to upload');
  }
}


}
