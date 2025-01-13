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
  noData:string = 'No Data Found';


  constructor(
    private readonly apartmentService: CommonUtilitiesService,
    private readonly changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const propertyData = this.apartmentService.getProducts().subscribe((data) => {
        this.products = data;
        this.changeDetectionRef.detectChanges();
      });
    this.subscriptionList.push(propertyData);
    this.loader = false;
  }
  

  ngOnDestroy(): void {
    this.subscriptionList.forEach((subscription) => subscription.unsubscribe());
  }
}
