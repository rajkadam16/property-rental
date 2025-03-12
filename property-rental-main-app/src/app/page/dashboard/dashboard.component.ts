import { Component } from '@angular/core';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userProperties = [
    { id: 1, name: 'Luxury Villa', location: 'Los Angeles', price: 5000, status: 'Occupied' },
    { id: 2, name: 'Downtown Apartment', location: 'New York', price: 3500, status: 'Available' },
    { id: 3, name: 'Beach House', location: 'Miami', price: 6000, status: 'Occupied' },
    { id: 4, name: 'Mountain Cabin', location: 'Colorado', price: 4500, status: 'Available' },
    { id: 5, name: 'City Condo', location: 'Chicago', price: 3200, status: 'Occupied' }
  ];
  occupiedProperties: number = 0;
  totalRevenue: number = 0;

  constructor(private propertyService: CommonUtilitiesService) {}

  ngOnInit() {
    this.loadUserProperties();
  }

  loadUserProperties() {
    const userId = localStorage.getItem('userId'); // Get logged-in user ID
    if (userId) {
      this.propertyService.getUserProperties(userId).subscribe(data => {
        this.userProperties = data;
        this.calculateStats();
      });
    }
  }

  calculateStats() {
    this.occupiedProperties = this.userProperties.filter(p => p.status === 'Occupied').length;
    this.totalRevenue = this.userProperties.reduce((sum, p) => sum + p.price, 0);
  }

  getStatusClass(status: string) {
    return status === 'Occupied' ? 'bg-success text-white px-2 rounded' :
           status === 'Available' ? 'bg-warning text-dark px-2 rounded' : '';
  }
  

}
