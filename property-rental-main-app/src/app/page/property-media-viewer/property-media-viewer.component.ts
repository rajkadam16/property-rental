import { Component, Input } from '@angular/core';
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

  propertyPhotosStyle: any = {
    'object-fit': 'cover', // Ensures images are cropped to fill the container
    height: '100%',        // Matches the height of the carousel item
    width: '100%',         // Stretches to fit the width
    'max-height': '750px'  // Adjust as needed for your carousel height
  };

  propertyFloorPlansStyle: any = {
    'object-fit': 'cover', // Ensures images are cropped to fill the container
    height: '100%',        // Matches the height of the carousel item
    width: '100%',         // Stretches to fit the width
    'max-height': '750px'  // Adjust as needed for your carousel height
  };
  @Input("propertymedia") propertymedia: any;
  @Input("media") mediaData: any;
  user: any[] = [];
  propertyName: any[] = [];
  propertyFloorPlans: PropertyImages | undefined;
  propertyPhotos: PropertyImages | undefined;


  constructor(private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly propertyDataService: CommonUtilitiesService
  ) { }
  backToPreviwsPage() {
    this.location.back();
  }

  ngOnInit(): void {
    const productId = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.propertyDataService.getProductById(productId).subscribe((response: any) => {
      this.user = response;
      this.propertyName = response.propertyName;
      this.propertyFloorPlans = response.propertyFloorPlans;
      this.propertyPhotos = response.propertyPhotos;
    });

  }
}
