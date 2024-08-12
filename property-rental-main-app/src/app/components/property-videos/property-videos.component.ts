import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CacheJsonDataService } from 'src/app/core/service/cache-json-data.service';

@Component({
  selector: 'app-property-videos',
  templateUrl: './property-videos.component.html',
  styleUrls: ['./property-videos.component.css']
})
export class PropertyVideosComponent implements OnInit {
  videos:any[]=[]
  constructor(private video: CacheJsonDataService) { }
  
  ngOnInit(): void {
    this.video.parseJsonFile(api.propertyImgVid).subscribe((res: any) => {
      this.videos = res.videos;
    });
  }

}