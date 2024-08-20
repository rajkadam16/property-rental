import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
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
