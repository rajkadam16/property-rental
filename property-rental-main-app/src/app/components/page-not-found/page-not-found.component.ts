import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  pagenotfoundData:any[]=[];
  constructor(private pageNotFound:CommonUtilitiesService) { }
  ngOnInit(): void {
    this.pageNotFound.parseJsonFile(api.pageNotFound).subscribe((data:any)=>{
      this.pagenotfoundData=data;
    })
  }


}
