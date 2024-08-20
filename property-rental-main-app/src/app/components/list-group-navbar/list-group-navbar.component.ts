import { Component, ElementRef, ViewChild } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-list-group-navbar',
  templateUrl: './list-group-navbar.component.html',
  styleUrls: ['./list-group-navbar.component.css']
})
export class ListGroupNavbarComponent {
  listGroupData: any[] = [];
  activeItem: string = '';

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  constructor(public listgroup: CommonUtilitiesService) {}

  ngOnInit(): void {
    this.listgroup
      .parseJsonFile(api.listgroupNav)
      .subscribe((data: any) => {
        this.listGroupData = data;
      });
  }

  inview(itemId: string) {
    const element = this.scrollContainer.nativeElement.querySelector(
      `#${itemId}`
    );
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onview(itemId: string) {
    this.activeItem = itemId;
  }
}
