import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CacheJsonDataService } from 'src/app/core/service/cache-json-data.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  faqData: any[] = [];

  constructor(public faq: CacheJsonDataService) { }

  ngOnInit(): void {
    this.faq.parseJsonFile(api.faqs).subscribe((res: any) => {
      this.faqData = res.mainfaqs;
    });
  }
  togglePanel(panel: any) {
    panel.isOpen = !panel.isOpen;
  }
}
