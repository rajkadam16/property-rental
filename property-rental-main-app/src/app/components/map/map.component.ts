import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() lat: any = 0; // Input for latitude
  @Input() lng: any = 0; // Input for longitude
  @Input() zoom: any = 15; // Optional input for zoom level

  position: { lat: any; lng: any } = { lat: 0, lng: 0 }; // Default position

  constructor() {}

  ngOnInit(): void {
    // Update the position when the component initializes
    this.position = {
      lat: this.lat,
      lng: this.lng
    };
  }
}
