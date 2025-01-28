import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutProperty, ContactPropertyBox, FeaturesSection, FloorPlanDetails, ImageGallery, PropertyData, PropertySchoolData } from 'src/app/core/models/interface';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-data',
  templateUrl: './property-data.component.html',
  styleUrls: ['./property-data.component.css'],
})
export class PropertyDataComponent implements OnInit {
  carouselImageStyle:any = {
    'object-fit': 'cover', // Ensures images are cropped to fill the container
    height: '100%',        // Matches the height of the carousel item
    width: '100%',         // Stretches to fit the width
    'max-height': '750px'  // Adjust as needed for your carousel height
  };

  product: any[] = [];
  propertyImgGallery:any[]=[];
  AboutPropertyTowers:any[]=[];
  NeighborhoodDatas:any[]=[];
  propertySchoolDatas:any[]=[];
  UniqueFeaturesOfPropertys:any[]=[];
  PropertyAmenities:any[]=[];
  ApartmentFeatures:any[]=[];
  floorplandetails:any[]=[];
  propertyunitsdatas:any[]=[];
  contactpropertyboxs:any[]=[];
 
  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: CommonUtilitiesService
  ) {}

  ngOnInit(): void {
    this.fetchPropertyDetails();
}

  fetchPropertyDetails(): void {
    // const productId = this.route.snapshot.params['id']; //backend api
    const productId = Number(this.route.snapshot.paramMap.get('id')); //json file
    this.productService.getProductById(productId).subscribe({next: (response) => {
        this.product = response;
        this.AboutPropertyTowers = response.aboutProperty;
        this.NeighborhoodDatas = response.neighborhoodData;
        this.propertySchoolDatas = response.propertySchoolData;
        this.UniqueFeaturesOfPropertys = response.uniqueFeaturesOfProperty;
        this.PropertyAmenities = response.propertyAmenitie;
        this.ApartmentFeatures = response.apartmentFeature;
        this.floorplandetails = response.floorplandetails;
        this.propertyunitsdatas = response.propertyunitsdata;
        this.contactpropertyboxs= response.contactpropertybox;
        this.propertyImgGallery = response.imgGallery;
      },
      error: (error) => { console.log('Error fetching property details', error); }
    });
  }



}
