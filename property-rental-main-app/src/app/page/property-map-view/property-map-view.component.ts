import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-map-view',
  templateUrl: './property-map-view.component.html',
  styleUrls: ['./property-map-view.component.css']
})
export class PropertyMapViewComponent implements OnInit, OnDestroy {
  pageSize = 3;
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
    { label: 'Semi', checked: false },
    { label: 'Full', checked: false },
    { label: 'None', checked: false }
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
    const propertyData = this.apartmentService.getProducts().subscribe((response: any) => {
      this.loader=false;
      this.products = response;
      this.filteredProperties = response;
      this.sortProperties();
      
      this.changeDetectionRef.detectChanges();
   
    });
  
    this.subscriptionList.push(propertyData);



  }
  //filtering properties based on BHK
  filterProperties(criteria: any, options: any) {
    const selectedOptions: string[] = options
      .filter((option: { label: string; checked: boolean }) => option.checked)
      .map((option: { label: string; checked: boolean }) => option.label);

    this.filteredProperties = this.products.filter(property =>
      selectedOptions.length === 0 || selectedOptions.includes(property[criteria])
    );
  }
  //sorting properties price wise
  sortProperties(): void {
    if (this.sortOption === 'lowToHigh') {
      this.sortedProperties = this.filteredProperties.sort((a, b) => a.propertyPrice - b.propertyPrice);
    } else {
      this.sortedProperties = this.filteredProperties.sort((a, b) => b.propertyPrice - a.propertyPrice);
    }
  }

  onSortChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.sortOption = selectElement.value;
    this.sortProperties();
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach((subscription) => subscription.unsubscribe());
  }
}
