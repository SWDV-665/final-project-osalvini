import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { GoogleMaps, GoogleMapsEvent, Marker, GoogleMap } from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'components-river-map',
  templateUrl: 'river-map.component.html'
})
export class RiverMapComponent {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;
  tempMarker: Marker;
  userMarker: Marker;
  @Output() locationSelected = new EventEmitter<{ lat: number, lng: number }>();

  constructor(
    private platform: Platform,
    private googleMaps: GoogleMaps,
    private geolocation: Geolocation
  ) { }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.map = this.googleMaps.create(this.mapElement.nativeElement, {
        camera: {
          target: {
            lat: resp.coords.latitude,
            lng: resp.coords.longitude
          },
          zoom: 10
        }
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
        this.addUserLocationMarker(resp.coords.latitude, resp.coords.longitude);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  addUserLocationMarker(lat: number, lng: number) {
    const markerOptions = {
      position: { lat, lng },
      title: 'Your Location',
      icon: 'blue'
    };
    this.map.addMarker(markerOptions).then(marker => {
      this.userMarker = marker;
      marker.showInfoWindow();
    });
  }

  plotLocations(locations: any[], userLat: number, userLng: number) {
    if (!this.map) {
      console.log('Map not initialized yet');
      setTimeout(() => this.plotLocations(locations, userLat, userLng), 3000);
      return;
    }

    this.map.clear().then(() => {
      let points = [];

      // Create a marker for the user
      const userPosition = { lat: userLat, lng: userLng };
      points.push(userPosition);
      this.map.addMarker({
        position: userPosition,
        title: 'Your Location',
        icon: 'blue'
      }).then(marker => {
        this.userMarker = marker;
        marker.showInfoWindow();
      });

      // Add other markers
      locations.forEach(location => {
        let [lat, lng] = location.latlong.split(', ');
        location.lat = lat;
        location.lng = lng;
        let locPosition = { lat: location.lat, lng: location.lng };
        points.push(locPosition);
        this.map.addMarker({
          position: locPosition,
          title: location.name
        }).then((marker: Marker) => {
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            this.map.animateCamera({ target: marker.getPosition(), zoom: 10 });
            marker.showInfoWindow();
          });
        });
      });

      this.map.moveCamera({
        target: points,
        padding: 100
      });
    });
  }


  toggleNewLocationMode(enable: boolean, userLat: number, userLng: number) {
    if (enable) {
      this.map.clear().then(() => {
        this.addUserLocationMarker(userLat, userLng);
        this.setupMapClick();
      });
    } else {
      this.tempMarker && this.tempMarker.remove();
      this.tempMarker = null;
      this.plotLocations([], userLat, userLng);
    }
  }

  setupMapClick() {
    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(event => {
      this.placeTempMarker(event[0]);
    });
  }

  placeTempMarker(latLng) {
    if (this.tempMarker) {
      this.tempMarker.setPosition(latLng);
    } else {
      this.map.addMarker({
        position: latLng,
        draggable: true,
        title: "New Location"
      }).then(marker => {
        this.tempMarker = marker;
        marker.showInfoWindow();
      });
    }
    this.locationSelected.emit({ lat: latLng.lat, lng: latLng.lng });
  }
}
