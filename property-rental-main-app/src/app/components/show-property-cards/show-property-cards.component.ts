
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';


@Component({
  selector: 'app-show-property-cards',
  templateUrl: './show-property-cards.component.html',
  styleUrls: ['./show-property-cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowPropertyCardsComponent implements OnInit,OnDestroy {
  pageSize = 2;
  currentPage = 1;
  products: any[] = [];
  searchText: any;
  dropDownFilter:any;
  loader:boolean = true;
  subscriptionList:Subscription[]=[];

  constructor(private readonly apartmentService: CommonUtilitiesService,private readonly changeDetectionRef: ChangeDetectorRef) {}


  ngOnInit(): void {
const propertyData =     this.apartmentService.getProducts().subscribe(data => {
  this.products = data;
  this.changeDetectionRef.detectChanges();
});
this.subscriptionList.push(propertyData);
this.loader = false;
  }

  ngOnDestroy(): void {
    this.subscriptionList.forEach(subscription => subscription.unsubscribe());

  }
}

