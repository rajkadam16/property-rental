import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  constructor() { }

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 19.0760, lng: 72.8777
  };
  zoom = 5;
  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
  };
}
