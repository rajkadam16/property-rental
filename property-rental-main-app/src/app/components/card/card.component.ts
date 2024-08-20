import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardData: any[] = [];

  constructor(public faq: CommonUtilitiesService) { }

  ngOnInit(): void {
    this.faq.parseJsonFile(api.cards).subscribe((res: any) => {
      this.cardData = res;
    });
  }
}
