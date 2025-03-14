import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  bookings = [
    { tenant: 'John Doe', property: 'Luxury Apartment', date: '2025-03-15', status: 'Pending' },
    { tenant: 'Alice Smith', property: 'Beach House', date: '2025-03-16', status: 'Accepted' },
    { tenant: 'Robert Brown', property: 'Downtown Condo', date: '2025-03-17', status: 'Rejected' },
    { tenant: 'Emma Johnson', property: 'Cozy Studio', date: '2025-03-18', status: 'Pending' }
  ];

  filteredBookings = [...this.bookings];

  filterStatus(status: string) {
    if (status === 'all') {
      this.filteredBookings = [...this.bookings];
    } else {
      this.filteredBookings = this.bookings.filter(b => b.status.toLowerCase() === status);
    }
  }

  updateStatus(booking: any, newStatus: string) {
    booking.status = newStatus;
    this.filterStatus('all'); // Refresh list
  }
}
