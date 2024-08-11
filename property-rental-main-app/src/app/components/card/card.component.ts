import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CacheJsonDataService } from 'src/app/core/service/cache-json-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  cardData: any[] = [];

  constructor(public faq: CacheJsonDataService) { }

  ngOnInit(): void {
    this.faq.parseJsonFile(api.cards).subscribe((res: any) => {
      this.cardData = res;
    });
  }
}
