import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuretteData: any[] = [];
  faqData: any[] = [];
  products: any[] = [];
  constructor(private readonly data: CommonUtilitiesService) { }

  ngOnInit(): void {
    this.data.parseJsonFile(api.featurette).subscribe((res: any) => {
      this.featuretteData = res;
      this.data.getProducts().subscribe(data => {
        this.products = data;
      });
    });





  }
}
