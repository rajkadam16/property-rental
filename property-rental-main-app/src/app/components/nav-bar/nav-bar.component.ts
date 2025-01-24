import { Component, OnInit } from '@angular/core';
import { ApiConfig } from 'src/app/core/constant/ApiConfig';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  heading: string = 'Cityscape rentals';
  navbarData: any[] = []
  constructor(private readonly navbar: CommonUtilitiesService) { }
  ngOnInit(): void {
    this.navbarFunc()
  }
  async navbarFunc(){
  this.navbar.parseJsonFile(ApiConfig.navbar).subscribe((response: any) => {
      this.navbarData = response;
    })
  }
}
