import { Component, Input, OnInit } from '@angular/core';
import { PropertyImages } from 'src/app/core/models/interface';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {
  @Input("data") imageCarousel: PropertyImages | undefined;

  currentIndex: number = 0;
  interval: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds
  }

  stopCarousel(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  nextImage(): void {
    if (this.imageCarousel?.images) {
      this.currentIndex = (this.currentIndex + 1) % this.imageCarousel.images.length;
    }
  }

  previousImage(): void {
    if (this.imageCarousel?.images) {
      this.currentIndex = (this.currentIndex - 1 + this.imageCarousel.images.length) % this.imageCarousel.images.length;
    }
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }
}
