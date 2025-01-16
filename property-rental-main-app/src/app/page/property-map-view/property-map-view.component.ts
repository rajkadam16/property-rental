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
  searchText: string = '';
  subscriptionList: Subscription[] = [];
  sortedProperties: any[] = [];
  sortOption: string = 'lowToHigh'; 

  constructor(
    private readonly apartmentService: CommonUtilitiesService,
    private readonly changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const propertyData = this.apartmentService.getProducts().subscribe((data:any) => {
        this.products = data;
        this.sortProperties();
        this.changeDetectionRef.detectChanges();
      });
    this.subscriptionList.push(propertyData);
  }

  sortProperties(): void {
    if (this.sortOption === 'lowToHigh') {
      this.sortedProperties = this.products.sort((a, b) => a.propertyPrice - b.propertyPrice);
    } else {
      this.sortedProperties = this.products.sort((a, b) => b.propertyPrice - a.propertyPrice);
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
