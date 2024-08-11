import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CacheJsonDataService } from 'src/app/core/service/cache-json-data.service';

@Component({
  selector: 'app-property-photos',
  templateUrl: './property-photos.component.html',
  styleUrls: ['./property-photos.component.css']
})
export class PropertyPhotosComponent implements OnInit {
  photos:any[]=[]
  constructor(private photo: CacheJsonDataService) { }
  
  ngOnInit(): void {
    this.photo.parseJsonFile(api.propertyImgVid).subscribe((res: any) => {
      this.photos = res.images;
    });
  }
}
