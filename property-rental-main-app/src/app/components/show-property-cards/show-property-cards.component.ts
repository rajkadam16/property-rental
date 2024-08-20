import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';


@Component({
  selector: 'app-show-property-cards',
  templateUrl: './show-property-cards.component.html',
  styleUrls: ['./show-property-cards.component.css']
})
export class ShowPropertyCardsComponent {
  pageSize = 5;
  currentPage = 1;
  apartments: any[] = [];
  searchText: any;

  constructor(private apartmentService: CommonUtilitiesService) {}

  ngOnInit(): void {
    this.apartmentService.parseJsonFile(api.propertyCard).subscribe((data:any) => {
      this.apartments = data.apartments;
    });
  }

}
