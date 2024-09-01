import { Component } from '@angular/core';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';


@Component({
  selector: 'app-show-property-cards',
  templateUrl: './show-property-cards.component.html',
  styleUrls: ['./show-property-cards.component.css']
})
export class ShowPropertyCardsComponent {
  pageSize = 2;
  currentPage = 1;
  products: any[] = [];
  searchText: any;

  constructor(private apartmentService: CommonUtilitiesService) {}

  ngOnInit(): void {
    this.apartmentService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}

