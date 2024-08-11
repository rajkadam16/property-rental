import { Component } from '@angular/core';
import { PropertyFloorPlanComponent } from 'src/app/components/property-floor-plan/property-floor-plan.component';
import { PropertyPhotosComponent } from 'src/app/components/property-photos/property-photos.component';
import { PropertyVideosComponent } from 'src/app/components/property-videos/property-videos.component';
import { PropertyVirtualToursComponent } from 'src/app/components/property-virtual-tours/property-virtual-tours.component';
import { TabModel } from 'src/app/core/models/interface';

@Component({
  selector: 'app-property-img-vid',
  templateUrl: './property-img-vid.component.html',
  styleUrls: ['./property-img-vid.component.css']
})
export class PropertyImgVidComponent {
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
  },
  {
    id: "virtual",
    displayName: "Virtual",
    defaultActive: "",
    selected: false,
    components: [
      PropertyVirtualToursComponent
    ]
  },
  {
    id: "video",
    displayName: "Video",
    defaultActive: "",
    selected: false,
    components: [
      PropertyVideosComponent
    ]
  },
  ];
}
     