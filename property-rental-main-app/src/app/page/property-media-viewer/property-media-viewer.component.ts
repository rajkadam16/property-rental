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
  propertyFloorPlan: any[]=[];
  propertyImages: any[]=[];


constructor(private readonly location: Location,
      private readonly route: ActivatedRoute,
      private readonly productService: CommonUtilitiesService
){}
backToPreviwsPage() {
  this.location.back(); 
  }


  
  ngOnInit(): void {
    // Get the `id` from the parent route
    const productId = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe((response:any) => {
      this.user = response;
      this.propertyName = response.propertyName;
      this.propertyFloorPlan = response.propertyfloorplanphotos;
      this.propertyImages = response.propertyphoto;
    
    });
    console.log(this.user);
  }
  

}
// const productId = Number(this.route.snapshot.paramMap.get('id'));
// this.productService.getProductById(productId).subscribe((product) => {