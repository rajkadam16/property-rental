import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyFloorPlanComponent } from 'src/app/components/property-floor-plan/property-floor-plan.component';
import { PropertyPhotosComponent } from 'src/app/components/property-photos/property-photos.component';

import { TabModel } from 'src/app/core/models/interface';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-media-viewer',
  templateUrl: './property-media-viewer.component.html',
  styleUrls: ['./property-media-viewer.component.css']
})
export class PropertyMediaViewerComponent {

  @Input("propertyName") propertyName:any;
  @Input("media") mediaData:any;
  // @Input("propertyCard") propertyCard:any;
  
  tabDataList: TabModel[] = [{
    id: "photo",
    displayName: "Photos",
    defaultActive: "active",
    selected: true,
    components: [
      PropertyPhotosComponent
    ]
  },
  {
    id: "floor",
    displayName: "Floor",
    defaultActive: "",
    selected: false,
    components: [
      PropertyFloorPlanComponent
    ]
  }
  ];

  onTabHover(event: Event) {
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = '#495057'; // Lighter shade
    button.style.transform = 'scale(1.05)'; // Slight zoom effect
}

onTabLeave(event: Event) {
    const button = event.target as HTMLButtonElement;
    button.style.backgroundColor = ''; // Reverts to default
    button.style.transform = 'scale(1)'; // Reset scale
}
}
     