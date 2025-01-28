import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {
  @Input() data: any; // Input for the carousel data
  @Input() imageStyle: any; // Input for custom image styles

 
  currentIndex: number = 0; // Track the current image index
  interval: any; // For auto-slide functionality

  ngOnInit(): void {
    this.startCarousel(); // Start the carousel automatically
  }

  // Method to move to the next image
  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.data.images.length;
  }

  // Method to move to the previous image
  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.data.images.length) % this.data.images.length;
  }

  // Method to start the auto-slide carousel
  startCarousel(): void {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds
  }

  // Method to stop the auto-slide carousel
  stopCarousel(): void {
    clearInterval(this.interval);
  }
}
