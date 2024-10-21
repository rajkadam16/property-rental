import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
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
    this.navbar.parseJsonFile(api.navbar).subscribe((res:any)=>{
      this.navbarData =res;
    })
  }
}
