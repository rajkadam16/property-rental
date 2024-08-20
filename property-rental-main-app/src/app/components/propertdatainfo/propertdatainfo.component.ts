import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

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

  constructor(public faq: CommonUtilitiesService) { }

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
