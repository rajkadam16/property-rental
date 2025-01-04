import { Component } from '@angular/core';
import { ApiConfig } from 'src/app/core/constant/ApiConfig';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-featurette',
  templateUrl: './featurette.component.html',
  styleUrls: ['./featurette.component.css']
})
export class FeaturetteComponent {
  featuretteData: any[] = [];
  faqData: any[] = [];
  constructor(private readonly featurette: CommonUtilitiesService) { }

  ngOnInit(): void {
    this.featurette.parseJsonFile(ApiConfig.featurette).subscribe((res: any) => {
      this.featuretteData = res;
    });

  }
}
