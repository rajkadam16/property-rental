import { Component, OnInit } from '@angular/core';
import { ApiConfig } from 'src/app/core/constant/ApiConfig';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  navbarData:any [] = []
  username:string | undefined;
constructor(private navbar:CommonUtilitiesService){}
  ngOnInit(): void {
    this.navbar.parseJsonFile(ApiConfig.navbar).subscribe((res:any)=>{
      this.navbarData =res;
    })
  }
}
