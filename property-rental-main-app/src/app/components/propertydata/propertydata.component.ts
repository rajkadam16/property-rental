import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-propertydata',
  templateUrl: './propertydata.component.html',
  styleUrls: ['./propertydata.component.css']
})
export class PropertydataComponent {
  faqData: any[] = [];

  constructor(public faq: CommonUtilitiesService) { }

  ngOnInit(): void {
    this.faq.parseJsonFile(api.faqs).subscribe((res: any) => {
      this.faqData = res.mainfaqs;

    });
  }
  togglePanel(panel: any) {
    panel.isOpen = !panel.isOpen;
  }
}
