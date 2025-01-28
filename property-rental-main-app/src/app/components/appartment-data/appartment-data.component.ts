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


showFloorPlan: boolean = false;

constructor() {}

ngOnInit(): void {
  console.log('Property Data:', this.apartmentData);
}

toggleFloorPlan(): void {
  this.showFloorPlan = !this.showFloorPlan;
}

getFormattedAddress(): string {
  const address = this.apartmentData?.propertyDetails?.address;
  if (!address) return 'Not Available';
  return `${address.address1}, ${address.city}, ${address.state} ${address.zipCode}`;
}

getThumbnailUrl(): string {
  return this.apartmentData?.imgGallery?.[0]?.images?.[0]?.url || '/assets/placeholder.jpg';
}
}
