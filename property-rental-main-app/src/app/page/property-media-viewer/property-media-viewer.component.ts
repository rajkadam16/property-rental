import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';
import { PropertyImages } from 'src/app/core/models/interface';


@Component({
  selector: 'app-property-media-viewer',
  templateUrl: './property-media-viewer.component.html',
  styleUrls: ['./property-media-viewer.component.css']
})
export class PropertyMediaViewerComponent {

  user: any[] = [];
  propertyName: any[] = [];
  propertyFloorPlans: PropertyImages | undefined;
  propertyPhotos: PropertyImages | undefined;
  propertyMapPositionInLong: number = 0; //latitude 
  propertyMapPositionInLat: number = 0; //longitude

  propertyImageCarouselStyle: any = {
    'object-fit': 'cover', // Ensures images are cropped to fill the container
    'max-height': '800px',  // Increased height for the carousel
    'height': '100%', // Ensures the image will expand to the height of the container
    'margin': '0 auto', // Center the images horizontally
    'display': 'block',
    'max-width': '600px',  // Adjust as needed for your carousel width
  };

  constructor(private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly propertyDataService: CommonUtilitiesService
  ) { }

  ngOnInit(): void {
    const productId = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.propertyDataService.getProductById(productId).subscribe((response: any) => {
      this.user = response;
      this.propertyName = response.propertyName;
      this.propertyFloorPlans = response.propertyFloorPlans;
      this.propertyPhotos = response.propertyPhotos;
      this.propertyMapPositionInLat = parseFloat(response.propertyMapPositionInLat); //getting the latitude
      this.propertyMapPositionInLong = parseFloat(response.propertyMapPositionInLong) //getting the longitude
    });
  }

  backToPreviwsPage() {
    this.location.back();
  }

}
