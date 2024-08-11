import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CacheJsonDataService } from 'src/app/core/service/cache-json-data.service';

@Component({
  selector: 'app-featurette',
  templateUrl: './featurette.component.html',
  styleUrls: ['./featurette.component.css']
})
export class FeaturetteComponent {
  featuretteData: any[] = [];
  faqData: any[] = [];
  constructor(private featurette: CacheJsonDataService) { }

  ngOnInit(): void {
    this.featurette.parseJsonFile(api.featurette).subscribe((res: any) => {
      this.featuretteData = res;
    });

  }
}
