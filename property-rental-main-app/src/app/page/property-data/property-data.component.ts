import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  propertyImgGallery:any={};
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
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe((response) => {
      this.product = response;
      this.AboutPropertyTowers = response.AboutProperty;
      this.NeighborhoodDatas = response.NeighborhoodData;
      this.propertySchoolDatas = response.propertySchoolData;
      this.UniqueFeaturesOfPropertys = response.UniqueFeaturesOfProperty;
      this.PropertyAmenities = response.PropertyAmenitie;
      this.ApartmentFeatures = response.ApartmentFeature;
      this.floorplandetails = response.floorplandetails;
      this.propertyunitsdatas = response.propertyunitsdata;
      this.contactpropertyboxs= response.contactpropertybox;
      this.propertyImgGallery = response.propertyImgGallery;
    });
  }



}
