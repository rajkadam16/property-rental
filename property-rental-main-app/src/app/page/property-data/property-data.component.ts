import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AboutUs, ApartmentFeatures, Education, Hospital, ImageGallery, Neighborhood, Transportation } from 'src/app/core/models/interface';
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
  imgGallerys: ImageGallery[] = [];
  aboutProperty: AboutUs[] = [];
  apartmentFeatures: ApartmentFeatures[] = [];
  propertyNeighborHood: Neighborhood[] = [];
  propertyEducation: Education[] = [];
  transportations: Transportation[] = [];
  hospitals: Hospital[] = [];
  // filterBy: any[] = [];
  // data: any[] = [];  

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: CommonUtilitiesService
  ) {}

  ngOnInit(): void {
    this.fetchPropertyDetails();
  }

  fetchPropertyDetails(): void {
    const productId = this.route.snapshot.params['id']; 
    this.productService.getProductById(productId).pipe(
      catchError(error => {
        console.error('Error fetching property details:', error);
        // Handle the error here, you can return a default value or empty arrays
        return of({
          // filterBy: [],
          // data: [],
          imgGallery: [],
          aboutUs: [],
          apartmentFeatures: [],
          neighborHood: [],
          education: [],
          transportation: [],
          hospital: []
        });
      })
    ).subscribe((response: any) => {
      // this.filterBy = response.filterBy;
      // this.data = response.data;  
      this.product = response;
      this.imgGallerys = response.imgGallery;
      this.aboutProperty = response.aboutUs;
      this.apartmentFeatures = response.apartmentFeatures;
      this.propertyNeighborHood = response.neighborHood;
      this.propertyEducation = response.education;
      this.transportations = response.transportation;
      this.hospitals = response.hospital;
    });
  }


}
