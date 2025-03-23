import { Component } from '@angular/core';
import { ApiConfig } from 'src/app/core/constant/ApiConfig';
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
    this.faq.parseJsonFile(ApiConfig.faqs).subscribe({
      next: (res: any) => {
        this.faqData = res.mainfaqs;
      },
      error: (err: any) => {
        console.error("Error loading FAQ data:", err);
        this.faqData = []; // Set to empty array to prevent undefined errors
      }
    });
  }
  
  togglePanel(panel: any) {
    panel.isOpen = !panel.isOpen;
  }
}
