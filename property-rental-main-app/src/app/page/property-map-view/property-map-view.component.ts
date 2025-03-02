import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, of, Subscription } from 'rxjs';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-map-view',
  templateUrl: './property-map-view.component.html',
  styleUrls: ['./property-map-view.component.css']
})
export class PropertyMapViewComponent implements OnInit, OnDestroy {
  pageSize = 2;
  currentPage = 1;
  products: any[] = [];
  searchText: string = '';
  subscriptionList: Subscription[] = [];
  sortedProperties: any[] = [];
  filteredProperties: any[] = [];
  sortOption: string = 'lowToHigh';
  noData: string = 'noData';
  loader: boolean=false;

  bhkOptions = [
    { label: '1RK', checked: false },
    { label: '1BHK', checked: false },
    { label: '2BHK', checked: false },
    { label: '3BHK', checked: false }
  ];

  TypeofPropertysOptions = [
    { label: 'ResidentialApartment', checked: false },
    { label: 'ResidentialLand', checked: false },
    { label: 'StudioApartment', checked: false },
  ];

  furnishingOptions = [
    { label: 'SemiFurnish', checked: false },
    { label: 'FullyFurnish', checked: false },
    { label: 'Unfurnished', checked: false }
  ];
  ParkingOptions = [
    { label: '2Wheeler', checked: false },
    { label: '4Wheeler', checked: false }
  ];

  constructor(
    private readonly apartmentService: CommonUtilitiesService,
    private readonly changeDetectionRef: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
    this.loader=true;
    const propertyData = this.apartmentService.getProducts().pipe(
      catchError(error => {
        console.error('Error fetching property details:', error);
        return of([]);
      })
    ).subscribe((response: any) => {
      this.loader=false;
      this.products = response; 
      this.filteredProperties = response;
      this.changeDetectionRef.detectChanges();
    });
    this.subscriptionList.push(propertyData);



  }
  filterProperties(criteria: string, options: any) {
    const selectedOptions: string[] = options
      .filter((option: { label: string; checked: boolean }) => option.checked)
      .map((option: { label: string; checked: boolean }) => option.label);
  
    this.filteredProperties = this.products.filter(property =>
      selectedOptions.length === 0 || this.includesNestedProperty(property, criteria, selectedOptions)
    );
  }
  
  includesNestedProperty(property: any, criteria: string, selectedOptions: string[]): boolean {
    const keys = criteria.split('.');
    let nestedProperty = property;
  
    for (const key of keys) {
      if (nestedProperty[key] === undefined) {
        return false;
      }
      nestedProperty = nestedProperty[key];
    }
  
    return selectedOptions.includes(nestedProperty);
  }



  ngOnDestroy(): void {
    this.subscriptionList.forEach((subscription) => subscription.unsubscribe());
  }
}
