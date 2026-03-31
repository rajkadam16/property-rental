import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  activeFilter = 'all';

  bookings = [
    { tenant: 'Raj Kadam', property: 'Archer Towers', date: '2025-03-15', status: 'Pending' },
    { tenant: 'Chetan Mohite', property: 'Oakwood Apartments', date: '2025-03-16', status: 'Accepted' },
    { tenant: 'Ayan Pathan', property: 'Godrej The Trees', date: '2025-03-17', status: 'Pending' },
    { tenant: 'Sandesh Babar', property: 'The Urban Oasis', date: '2025-03-18', status: 'Rejected' }
  ];

  filteredBookings = [...this.bookings];

  filterStatus(status: string): void {
    this.activeFilter = status;
    if (status === 'all') {
      this.filteredBookings = [...this.bookings];
    } else {
      this.filteredBookings = this.bookings.filter(b => b.status.toLowerCase() === status);
    }
  }

  updateStatus(booking: any, status: string): void {
    booking.status = status;
    this.filterStatus(this.activeFilter);
  }
}
