import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';


@Component({
  selector: 'app-property-media-viewer',
  templateUrl: './property-media-viewer.component.html',
  styleUrls: ['./property-media-viewer.component.css']
})
export class PropertyMediaViewerComponent {

  @Input("propertymedia") propertymedia:any;
  @Input("media") mediaData:any;
  user: any[]=[];
  propertyName: any[]=[];
  propertyFloorPlans: any={};
  propertyPhotos: any={};


constructor(private readonly location: Location,
      private readonly route: ActivatedRoute,
      private readonly propertyDataService: CommonUtilitiesService
){}
backToPreviwsPage() {
  this.location.back(); 
  }


  
  ngOnInit(): void {
    const productId = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.propertyDataService.getProductById(productId).subscribe((response:any) => {
      console.log("PropertyMediaViewerComponent > propertyDataService :: > "+JSON.stringify(response));
      this.user = response;
      this.propertyName = response.propertyName;
      this.propertyFloorPlans = response.propertyFloorPlans;
      this.propertyPhotos = response.propertyPhotos;
    });
    
  }
  

}
