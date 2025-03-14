import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    { user: 'John Doe', property: 'Luxury Apartment', rating: 5, feedback: 'Amazing experience! Highly recommended.' },
    { user: 'Alice Smith', property: 'Beach House', rating: 4, feedback: 'Great stay, but the WiFi was slow.' },
    { user: 'Robert Brown', property: 'Downtown Condo', rating: 3, feedback: 'Decent place, but a bit noisy at night.' },
    { user: 'Emma Johnson', property: 'Cozy Studio', rating: 5, feedback: 'Perfect! Very clean and comfortable.' }
  ];

  get averageRating(): number {
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return this.reviews.length ? total / this.reviews.length : 0;
  }
}
