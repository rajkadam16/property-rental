import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-data',
  templateUrl: './property-data.component.html',
  styleUrls: ['./property-data.component.css'],
})
export class PropertyDataComponent implements OnInit {
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
