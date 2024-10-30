import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-data-additional-info',
  templateUrl: './property-data-additional-info.component.html',
  styleUrls: ['./property-data-additional-info.component.css']
})
export class PropertyDataAdditionalInfoComponent {
@Input ('additionalInfo') propertyInfo: any;
}
