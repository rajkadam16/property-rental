import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-featurette',
  templateUrl: './featurette.component.html',
  styleUrls: ['./featurette.component.css']
})
export class FeaturetteComponent {
  featuretteData: any[] = [];
  faqData: any[] = [];
  constructor(private featurette: CommonUtilitiesService) { }

  ngOnInit(): void {
    this.featurette.parseJsonFile(api.featurette).subscribe((res: any) => {
      this.featuretteData = res;
    });

  }
}
