import { Component, Input } from '@angular/core';
import { PropertyPhotosComponent } from '../property-photos/property-photos.component';
import { PropertyFloorPlanComponent } from '../property-floor-plan/property-floor-plan.component';
import { TabModel } from 'src/app/core/models/interface';

@Component({
  selector: 'app-appartment-data',
  templateUrl: './appartment-data.component.html',
  styleUrls: ['./appartment-data.component.css']
})
export class AppartmentDataComponent {
@Input("data") apartmentData:any;
@Input("unitsData") unitData:any;
@Input("floorplandetails") floorDetails:any;
isFloorPlanVisible: boolean = false;
isModalOpen: boolean = false;

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
