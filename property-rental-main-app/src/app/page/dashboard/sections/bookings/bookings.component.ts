import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  bookings = [
    { tenant: 'Raj Kadam', property: 'Archer Towers', date: '2025-03-15', status: 'Pending' },
    { tenant: 'Chetan Mohite', property: 'Oakwood Apartments', date: '2025-03-16', status: 'Accepted' },
    { tenant: 'Ayan Pathan', property: 'Godrej The Trees', date: '2025-03-17', status: 'Pending' },
    { tenant: 'Sandesh Babar', property: 'The Urban Oasis', date: '2025-03-18', status: 'Rejected' }
  ];

  
  filteredBookings = [...this.bookings];

  filterStatus(status: string) {
    if (status === 'all') {
      this.filteredBookings = [...this.bookings];
    } else {
      this.filteredBookings = this.bookings.filter(b => b.status.toLowerCase() === status);
    }
  }

  // updateStatus(booking: any, newStatus: string) {
  //   booking.status = newStatus;
  //   this.filterStatus('all'); // Refresh list
  // }
  async updateStatus(requestId: any, status: string): Promise<void> {
    try {
      const response: Response = await fetch(
        `https://backend.yourclaw.tech/api/adoption-requests/${requestId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            // Authorization: "Bearer ADMIN_TOKEN",
          },
          body: JSON.stringify({ status }),
        }
      );
  
      const data: unknown = await response.json();
      console.log(data);
  
      if (!response.ok) {
        throw new Error("Failed to update request status");
      }
    } catch (error) {
      console.error("Error updating request status:", error);
    }
  }
}
