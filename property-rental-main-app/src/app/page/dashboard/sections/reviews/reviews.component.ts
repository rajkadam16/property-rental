import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    {  tenant: 'Raj Kadam', property: 'Archer Towers', rating: 5, feedback: 'Amazing experience! Highly recommended.' },
    {  tenant: 'Chetan Mohite', property: 'Oakwood Apartments', rating: 4, feedback: 'Great stay, but the WiFi was slow.' },
    { tenant: 'Ayan Pathan', property: 'Godrej The Trees', rating: 3, feedback: 'Decent place, but a bit noisy at night.' },
    { tenant: 'Sandesh Babar', property: 'The Urban Oasis', rating: 5, feedback: 'Perfect! Very clean and comfortable.' }
  ];

  get averageRating(): number {
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return this.reviews.length ? total / this.reviews.length : 0;
  }
}
