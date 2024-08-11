import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CacheJsonDataService } from 'src/app/core/service/cache-json-data.service';

@Component({
  selector: 'app-propertdatainfo',
  templateUrl: './propertdatainfo.component.html',
  styleUrls: ['./propertdatainfo.component.css']
})
export class PropertdatainfoComponent {
  heading:any[]=[];
  appartmentDetalis: any[]=[];
  propertyListData:any[]=[];
  propertyPictures:any[]=[];

  constructor(public faq: CacheJsonDataService) { }

  ngOnInit(): void {
    this.faq.parseJsonFile(api.propertyData).subscribe((res: any) => {
      this.heading = res.propertData;
      this.appartmentDetalis = res.appartmentDetalis;
      this.propertyListData = res.sections;
      this.propertyPictures = res.pictures;
    });
  }
  togglePanel(panel: any) {
    panel.isOpen = !panel.isOpen;
  }
}
