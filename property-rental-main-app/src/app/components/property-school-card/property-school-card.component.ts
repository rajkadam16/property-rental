import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-school-card',
  templateUrl: './property-school-card.component.html',
  styleUrls: ['./property-school-card.component.css']
})
export class PropertySchoolCardComponent {
@Input ('schoolData') school:any;
}
