import { Component, OnInit } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-photos',
  templateUrl: './property-photos.component.html',
  styleUrls: ['./property-photos.component.css']
})
export class PropertyPhotosComponent implements OnInit {
  photos:any[]=[]
  // dataResponse:string|undefined;
  constructor(private photo: CommonUtilitiesService) { }
  
  ngOnInit(): void {
    this.photo.parseJsonFile(api.propertyImgVid).subscribe((res: any) => {
      this.photos = res.images;
    });
    // if(this.photos.length==0){
    //   this.dataResponse="No Photos Available"
    // }else{
    //   this.dataResponse=""
    // }
    // console.log(this.photo)
  }
  
}
