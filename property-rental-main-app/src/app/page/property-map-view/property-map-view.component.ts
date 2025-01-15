import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-map-view',
  templateUrl: './property-map-view.component.html',
  styleUrls: ['./property-map-view.component.css']
})
export class PropertyMapViewComponent  implements OnInit, OnDestroy  {
  pageSize = 3;
  currentPage = 1;
  products: any[] = [];
  searchText: any;
  dropDownFilter: any;
  loader: boolean = true;
  subscriptionList: Subscription[] = [];
  selectedSortOption: string = 'lowToHigh';


  constructor(
    private readonly apartmentService: CommonUtilitiesService,
    private readonly changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const propertyData = this.apartmentService.getProducts().subscribe((data:any) => {
        this.products = data;
        console.log(this.products);
        this.changeDetectionRef.detectChanges();
      });
    this.subscriptionList.push(propertyData);
    this.loader = false;
  }
  
  get sortedProperties(): any[] {
    return this.products.sort((a, b) => {
      if (this.selectedSortOption === 'lowToHigh') {
        return a.propertyPrice - b.propertyPrice;
      } else {
        return b.propertyPrice - a.propertyPrice;
      }
    });
  }

  onSortChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedSortOption = selectElement.value;
  }
  ngOnDestroy(): void {
    this.subscriptionList.forEach((subscription) => subscription.unsubscribe());
  }
}
