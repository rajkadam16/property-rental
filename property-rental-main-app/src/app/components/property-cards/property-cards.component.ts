import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-property-cards',
  templateUrl: './property-cards.component.html',
  styleUrls: ['./property-cards.component.css']
})
export class PropertyCardsComponent {
@Input() index: any;
@Input() propertyCard: any;

carouselImageStyle:any = {
  'object-fit': 'cover', // Ensures images are cropped to fill the container
  width: '100%',
  height: '100%',
};

  get primaryGallery() {
    if (!this.propertyCard || !this.propertyCard.imgGallery || this.propertyCard.imgGallery.length === 0) {
      return null;
    }
    const best = this.propertyCard.imgGallery.find((g: any) => g.type === 'Photos' || g.type === 'ImageGallery');
    return best || this.propertyCard.imgGallery[0];
  }

}
 
