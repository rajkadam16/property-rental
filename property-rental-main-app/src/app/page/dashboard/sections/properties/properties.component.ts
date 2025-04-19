import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/service/alert.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {
  properties: any[] = [];
  loader: boolean = false;
  constructor(private readonly propertyService: CommonUtilitiesService, private readonly authService: AuthService,private readonly alert:AlertService,) {}

  ngOnInit() {
    this.loadProperties();
  }
  deleteProperty(id: string) {
    if (confirm("Are you sure you want to delete this property?")) {
      this.propertyService.deleteProperty(id).subscribe({
        next: (res) => {
          this.alert.showAlert('Property deleted successfully!', 'success');
          this.loadProperties();
        },
        error: (err) => {
          console.error('Delete error:', err);
          this.alert.showAlert('Property deleted failed!', 'error');
        }
      });
    }
  }
  
  
  loadProperties(): void {
    const userId = this.authService.getUserId(); // Get user ID from local storage
  
    if (!userId) {
      console.error('User ID not found in local storage.');
      return;
    }
  
    this.loader = true; // Optional: show spinner
  
    this.propertyService.getUserProperties(userId).subscribe({
      next: (response) => {
        this.properties = response;
        this.loader = false;
      },
      error: (error) => {
        console.error('Error loading properties:', error);
        this.loader = false;
      }
    });
  }
  
}
