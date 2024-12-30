import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-property-photos',
  templateUrl: './property-photos.component.html',
  styleUrls: ['./property-photos.component.css']
})
export class PropertyPhotosComponent  {
  @Input("propertyPhotos") propertyPhotos:any;
  
  
}
