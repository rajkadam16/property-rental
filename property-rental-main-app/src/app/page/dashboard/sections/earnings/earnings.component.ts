import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.css']
})
export class EarningsComponent implements OnInit {
  totalEarnings = 0;
  pendingPayments = 0;

  transactions = [
    { tenant: 'Raj Kadam', property: 'Archer Towers', date: '2025-03-10', amount: 55000, status: 'Paid' },
    { tenant: 'Chetan Mohite', property: 'Oakwood Apartments', date: '2025-03-12', amount: 99800, status: 'Pending' },
    { tenant: 'Ayan Pathan', property: 'Godrej The Trees', date: '2025-03-14', amount: 78600, status: 'Paid' },
    { tenant: 'Sandesh Babar', property: 'The Urban Oasis', date: '2025-03-16', amount: 87600, status: 'Pending' }
  ];

  ngOnInit(): void {
    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalEarnings = this.transactions
      .filter(t => t.status === 'Paid')
      .reduce((sum, t) => sum + t.amount, 0);

    this.pendingPayments = this.transactions
      .filter(t => t.status === 'Pending')
      .reduce((sum, t) => sum + t.amount, 0);
  }
}
