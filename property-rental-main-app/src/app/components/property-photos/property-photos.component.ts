import { Component, Input, OnInit } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-photos',
  templateUrl: './property-photos.component.html',
  styleUrls: ['./property-photos.component.css']
})
export class PropertyPhotosComponent implements OnInit {
  @Input("propertyPhotos") propertyPhotos:any;
  photos:any[]=[]
  constructor(private readonly photo: CommonUtilitiesService) { }
  
  ngOnInit(): void {
   this.photo.getProducts().subscribe((data) => {
      this.photos = data;
    } );

  }
  
}
