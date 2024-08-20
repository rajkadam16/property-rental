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
  constructor(private featurette: CommonUtilitiesService) { }

  ngOnInit(): void {
    this.featurette.parseJsonFile(api.featurette).subscribe((res: any) => {
      this.featuretteData = res;
    });

  }

}
