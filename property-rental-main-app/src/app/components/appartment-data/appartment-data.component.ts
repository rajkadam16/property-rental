import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appartment-data',
  templateUrl: './appartment-data.component.html',
  styleUrls: ['./appartment-data.component.css']
})
export class AppartmentDataComponent {
@Input("data") apartmentData:any;
@Input("unitsData") unitData:any;
@Input("floorplandetails") floorDetails:any;
}
