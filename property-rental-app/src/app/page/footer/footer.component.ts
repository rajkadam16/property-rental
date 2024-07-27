import { Component } from '@angular/core';
import { api } from 'src/app/core/constant/api/api';
import { CacheJsonDataService } from 'src/app/core/service/cache-json-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  mains:any[]=[]
  sections:any[]=[]
  forms:any[]=[]
  constructor(private footer3: CacheJsonDataService) { }
  
  ngOnInit(): void {
    this.footer3.parseJsonFile(api.footer).subscribe((res: any) => {
      this.mains = res.main;
      this.sections = res.sections;
    });
  }
}
