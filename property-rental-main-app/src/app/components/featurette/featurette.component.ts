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
    this.featurette.parseJsonFile(ApiConfig.featurette).subscribe({
      next: (res: any) => {
        this.featuretteData = res;
      },
      error: (err: any) => {
        console.error("Error loading featurette data:", err);
        this.featuretteData = []; // Set to empty array to prevent undefined errors
      }
    });

  }
}
