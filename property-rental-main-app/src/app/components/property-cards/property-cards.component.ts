import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-cards',
  templateUrl: './property-cards.component.html',
  styleUrls: ['./property-cards.component.css']
})
export class PropertyCardsComponent {
  // @Input() apartment:any;
  @Input() index: any;




@Input() propertyCard!: any;
constructor(private router: Router) {}
redirectToDetails() {
  this.router.navigate(['/propertydetails', this.propertyCard.id]);
}
} 
 
