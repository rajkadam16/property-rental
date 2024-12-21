import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-property-cards',
  templateUrl: './property-cards.component.html',
  styleUrls: ['./property-cards.component.css']
})
export class PropertyCardsComponent {
@Input() index: any;
@Input() propertyCard!: any;
} 
 
