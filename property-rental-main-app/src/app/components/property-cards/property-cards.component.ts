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

} 
 
