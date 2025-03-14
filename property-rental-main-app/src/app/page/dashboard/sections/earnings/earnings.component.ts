import { Component } from '@angular/core';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent {
  totalEarnings = 3500;
  pendingPayments = 800;
  transactions = [
    { tenant: 'John Doe', property: 'Luxury Apartment', date: '2025-03-10', amount: 1200, status: 'Paid' },
    { tenant: 'Alice Smith', property: 'Beach House', date: '2025-03-12', amount: 900, status: 'Pending' },
    { tenant: 'Robert Brown', property: 'Downtown Condo', date: '2025-03-14', amount: 700, status: 'Paid' },
    { tenant: 'Emma Johnson', property: 'Cozy Studio', date: '2025-03-16', amount: 800, status: 'Pending' }
  ];

 
}
