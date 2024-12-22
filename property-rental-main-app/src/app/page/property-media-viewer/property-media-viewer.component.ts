import { Component, Input } from '@angular/core';
import { PropertyFloorPlanComponent } from 'src/app/components/property-floor-plan/property-floor-plan.component';
import { PropertyPhotosComponent } from 'src/app/components/property-photos/property-photos.component';

import { TabModel } from 'src/app/core/models/interface';

@Component({
  selector: 'app-property-media-viewer',
  templateUrl: './property-media-viewer.component.html',
  styleUrls: ['./property-media-viewer.component.css']
})
export class PropertyMediaViewerComponent {
  @Input("propertyName") propertyName:any;
  @Input("media") mediaData:any;
  
  tableDataList: TabModel[] = [{
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
}
     