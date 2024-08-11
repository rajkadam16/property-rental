import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CacheJsonDataService } from 'src/app/core/service/cache-json-data.service';

@Component({
  selector: 'app-property-virtual-tours',
  templateUrl: './property-virtual-tours.component.html',
  styleUrls: ['./property-virtual-tours.component.css']
})
export class PropertyVirtualToursComponent {
  virtualTours:any[]=[]
  constructor(private virtualTour: CacheJsonDataService) { }
  
  ngOnInit(): void {
    this.virtualTour.parseJsonFile(api.propertyImgVid).subscribe((res: any) => {
      this.virtualTours = res.virtual;
    });
  }
}
