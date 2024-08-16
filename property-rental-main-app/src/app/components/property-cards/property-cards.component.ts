import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CacheJsonDataService } from 'src/app/core/service/cache-json-data.service';

@Component({
  selector: 'app-property-cards',
  templateUrl: './property-cards.component.html',
  styleUrls: ['./property-cards.component.css']
})
export class PropertyCardsComponent implements OnInit{
  
  propertyTitle:any [] = []
  propertyImages:any [] = []
  propertyDetails:any [] = []
  propertyButton:any [] = []
  constructor(private propertyCard: CacheJsonDataService) { }

  ngOnInit(): void {
      this.propertyCard.parseJsonFile(api.propertyCard).subscribe((res:any)=>{
        this.propertyTitle = res.title
        this.propertyImages = res.images
        this.propertyDetails = res.details
        this.propertyButton = res.button
      })
  }



  //  not working
  // apartments: any[] = [];

  // constructor(private apartmentService: CacheJsonDataService) {}

  // ngOnInit(): void {
  //   this.apartmentService.parseJsonFile(api.propertyCard).subscribe((data:any) => {
  //     this.apartments = data.apartments;
  //   });
  // }
}
