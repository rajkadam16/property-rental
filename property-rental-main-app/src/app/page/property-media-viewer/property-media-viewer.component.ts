import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';
import { ImageGallery } from 'src/app/core/models/interface';


@Component({
  selector: 'app-property-media-viewer',
  templateUrl: './property-media-viewer.component.html',
  styleUrls: ['./property-media-viewer.component.css']
})
export class PropertyMediaViewerComponent {
  imgGallerys: ImageGallery[] = [];

  propertyImageCarouselStyle: any = {
    'object-fit': 'cover', // Ensures images are cropped to fill the container
    'max-height': '800px',  // Increased height for the carousel
    'height': '100%', // Ensures the image will expand to the height of the container
    'margin': '0 auto', // Center the images horizontally
    'display': 'block',
    'max-width': '600px',  // Adjust as needed for your carousel width
  };

  constructor(private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly propertyDataService: CommonUtilitiesService
  ) { }

  ngOnInit(): void {
    const productId = this.route.parent?.snapshot.params['id']; //backend api
    this.propertyDataService.getProductById(productId).subscribe({
      next: (data) => {
        this.imgGallerys = data.imgGallery;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  backToPreviwsPage() {
    this.location.back();
  }

}
