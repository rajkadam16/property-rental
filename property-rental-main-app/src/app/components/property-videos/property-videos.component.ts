import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-videos',
  templateUrl: './property-videos.component.html',
  styleUrls: ['./property-videos.component.css']
})
export class PropertyVideosComponent implements OnInit {
  videos:any[]=[]
  constructor(private video: CommonUtilitiesService) { }
  
  ngOnInit(): void {
    this.video.parseJsonFile(api.propertyImgVid).subscribe((res: any) => {
      this.videos = res.videos;
    });
  }

}
