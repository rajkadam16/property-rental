import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-data',
  templateUrl: './property-data.component.html',
  styleUrls: ['./property-data.component.css'],
})
export class PropertyDataComponent implements OnInit {
  product: any[] = [];
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
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
      this.AboutPropertyTowers = product.AboutProperty;
      this.NeighborhoodDatas = product.NeighborhoodData;
      this.propertySchoolDatas = product.propertySchoolData;
      this.UniqueFeaturesOfPropertys = product.UniqueFeaturesOfProperty;
      this.PropertyAmenities = product.PropertyAmenitie;
      this.ApartmentFeatures = product.ApartmentFeature;
      this.floorplandetails = product.floorplandetails;
      this.propertyunitsdatas = product.propertyunitsdata;
      this.contactpropertyboxs= product.contactpropertybox;

    });
  }


}
