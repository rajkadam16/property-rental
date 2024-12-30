import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';


@Component({
  selector: 'app-property-media-viewer',
  templateUrl: './property-media-viewer.component.html',
  styleUrls: ['./property-media-viewer.component.css']
})
export class PropertyMediaViewerComponent {

  @Input("propertymedia") propertymedia:any;
  @Input("media") mediaData:any;


constructor(private readonly location: Location,
){}
backToPreviwsPage() {
  this.location.back(); 
  }


  

}
     