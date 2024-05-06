import { Component, ViewChild } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { DataService } from '../../providers/data-service/data-service';
import { RiverMapComponent } from '../../components/map/river-map.component';
import { Geolocation } from '@ionic-native/geolocation';

interface RiverAccessLocation {
  id: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
}

interface Category {
  name: string;
  subTitle: string;
}

@Component({
  selector: 'page-river-access',
  templateUrl: 'riverAccess.html',
  styleUrls: ['/src/pages/riverAccess/riverAccess.scss'],
})
export class RiverAccessPage {
  title = "Find River Access";
  searchTerm: string = '';
  @ViewChild(RiverMapComponent) riverMapComponent: RiverMapComponent;
  locations: RiverAccessLocation[] = [];
  filteredLocations: RiverAccessLocation[] = [];
  userLat: number;
  userLng: number;
  addingLocation = false;
  categories: Category[] = [
    { name: 'location', subTitle: "Favorite Fishing Spots" },
    { name: 'feed_location', subTitle: "Community Fishing Spots" },
  ];

  constructor(private dataService: DataService, private geolocation: Geolocation, private alertCtrl: AlertController) {
    this.loadLocations();
  }

  getSubTitle(name: string): string {
    const category = this.categories.find(c => c.name === name);
    return category ? category.subTitle : '';
  }

  loadLocations() {

    const subTitle = this.getSubTitle('feed_location');
    this.dataService.getItems(subTitle).subscribe(result => {
      this.locations = result.items;
      this.filteredLocations = [...this.locations];
      this.loadGPS();
    });
  }

  loadGPS() {
    this.geolocation.getCurrentPosition().then(resp => {
      this.userLat = resp.coords.latitude;
      this.userLng = resp.coords.longitude;
      this.riverMapComponent.plotLocations(this.filteredLocations, this.userLat, this.userLng);
    }).catch(error => {
      console.error('Error getting user location', error);
    });
  }

  filterResults(searchTerm: string) {
    if (!searchTerm) {
      this.resetView();
    } else {
      this.filteredLocations = this.locations.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (this.filteredLocations.length > 0) {
        this.riverMapComponent.plotLocations(this.filteredLocations, this.userLat, this.userLng);
      } else {
        console.log("No locations match the search criteria.");
      }
    }
  }

  resetView() {
    this.searchTerm = '';
    this.filteredLocations = [...this.locations];
    this.riverMapComponent.plotLocations(this.filteredLocations, this.userLat, this.userLng);
  }

  toggleAddLocation() {
    this.addingLocation = !this.addingLocation;
    this.riverMapComponent.toggleNewLocationMode(this.addingLocation, this.userLat, this.userLng);
  }

  saveNewLocation(latLng: { lat: number; lng: number }) {
    let prompt = this.alertCtrl.create({
      title: 'New Location',
      message: 'Enter a name for this location:',
      inputs: [{ name: 'title', placeholder: 'Title' }],
      buttons: [
        {
          text: 'Cancel', handler: data => { }
        },
        {
          text: 'Save', handler: data => {
            if (data.title) {
              let newLocation = { name: data.title, lat: latLng.lat, lng: latLng.lng };
              const subTitle = this.getSubTitle('location');
              this.dataService.addItem(subTitle, newLocation).subscribe(() => {
                this.toggleAddLocation();
                this.loadLocations();
              });
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
