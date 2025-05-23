import { Component } from '@angular/core';
import { ApiConfig } from 'src/app/core/constant/ApiConfig';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuretteData: any[] = [];
  faqData: any[] = [];
  products: any[] = [ ];
  
  constructor(private readonly data: CommonUtilitiesService) { }

  ngOnInit(): void {
    this.data.parseJsonFile(ApiConfig.featurette).subscribe((res: any) => {
      this.featuretteData = res;
 this.getData();
    });

  }


  getData(): void {
    this.data.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
}
