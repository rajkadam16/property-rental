import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CacheJsonDataService } from 'src/app/core/service/cache-json-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  navbarData:any [] = []
constructor(private navbar:CacheJsonDataService){}
  ngOnInit(): void {
    this.navbar.parseJsonFile(api.navbar).subscribe((res:any)=>{
      this.navbarData =res;
    })
  }

}
