import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  properties: any[] = [];

  constructor(private readonly propertyService: CommonUtilitiesService, private readonly authService: AuthService,private readonly router:Router) {}

  ngOnInit() {
    const userId = this.authService.getUserId(); // Get user ID from local storage
    if (userId) {
      this.propertyService.getUserProperties(userId).subscribe(response => {
        this.properties = response;
      });
    }
  }

  deleteProperty(propertyId: string) {
    this.propertyService.deleteProperty(propertyId).subscribe(() => {
      this.properties = this.properties.filter(p => p.id !== propertyId);
    });
  }

}
