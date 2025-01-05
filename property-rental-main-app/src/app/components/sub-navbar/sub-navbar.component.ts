
import { Component } from '@angular/core';
import { ApiConfig } from 'src/app/core/constant/ApiConfig';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent {
selectData: any[] = [];

constructor(private readonly subNav:CommonUtilitiesService) {}

ngOnInit(): void {
  this.subNav.parseJsonFile(ApiConfig.subNavbar).subscribe((data:any) => {
    this.selectData = data;
  });
}
}
