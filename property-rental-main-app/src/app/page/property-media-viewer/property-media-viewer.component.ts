import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-property-media-viewer',
  templateUrl: './property-media-viewer.component.html',
  styleUrls: ['./property-media-viewer.component.css']
})
export class PropertyMediaViewerComponent {

  @Input("propertyName") propertyName:any;
  @Input("media") mediaData:any;


constructor(private readonly location: Location){}
goBack() {
  this.location.back(); 
  }
}
     