import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-data-facilities',
  templateUrl: './property-data-facilities.component.html',
  styleUrls: ['./property-data-facilities.component.css']
})
export class PropertyDataFacilitiesComponent {
@Input("propertyDetalisList") facilities:any;
}
