import { Component } from '@angular/core';
import { ApiConfig } from 'src/app/core/constant/ApiConfig';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  mains:any[]=[]
  sections:any[]=[]
  forms:any[]=[]
  constructor(private readonly footer3: CommonUtilitiesService) { }
  
  ngOnInit(): void {
    this.footer3.parseJsonFile(ApiConfig.footer).subscribe({
      next: (data:any) => {
        this.mains = data.main;
        this.sections = data.sections;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}