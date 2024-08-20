import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';


@Component({
  selector: 'app-property-floor-plan',
  templateUrl: './property-floor-plan.component.html',
  styleUrls: ['./property-floor-plan.component.css']
})
export class PropertyFloorPlanComponent implements OnInit {
  floorPlans:any[]=[]
  constructor(private floorPlan: CommonUtilitiesService) { }
  
  ngOnInit(): void {
    this.floorPlan.parseJsonFile(api.propertyImgVid).subscribe((res: any) => {
      this.floorPlans = res.floorPlan;
    });
  }
}
