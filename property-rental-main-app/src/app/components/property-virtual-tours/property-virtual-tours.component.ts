import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-property-virtual-tours',
  templateUrl: './property-virtual-tours.component.html',
  styleUrls: ['./property-virtual-tours.component.css']
})
export class PropertyVirtualToursComponent {
  virtualTours:any[]=[]
  dataResponse: string | undefined;
  constructor(private virtualTour: CommonUtilitiesService) { }
  
  ngOnInit(): void {
    this.virtualTour.parseJsonFile(api.propertyImgVid).subscribe((res: any) => {
      this.virtualTours = res.virtual;
    });
  //   if(this.virtualTours.length==0){
  //     this.dataResponse="data was not available"
  // }else{
  //   this.dataResponse="ss"
  // }

  }

}
