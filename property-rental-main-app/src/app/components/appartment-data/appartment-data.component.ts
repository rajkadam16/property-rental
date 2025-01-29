import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appartment-data',
  templateUrl: './appartment-data.component.html',
  styleUrls: ['./appartment-data.component.css']
})
export class AppartmentDataComponent {
@Input("data") apartmentData:any;
@Input() unitsData: any = { cols: [], rows: [] };
@Input("floorplandetails") floorDetails:any;

carouselImageStyle:any = {
  'object-fit': 'cover', // Ensures images are cropped to fill the container
  height: '100%',        // Matches the height of the carousel item
  width: '100%',         // Stretches to fit the width
  'max-height': '750px'  // Adjust as needed for your carousel height
};
showFloorPlan: boolean = false;

constructor() {}

ngOnInit(): void {
  console.log('Property Data:', this.apartmentData);
}

get unitData() {
  return this.unitsData || { cols: [], rows: [] };
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
