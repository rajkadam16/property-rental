import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-property',
  templateUrl: './contact-property.component.html',
  styleUrls: ['./contact-property.component.css']
})
export class ContactPropertyComponent {
@Input("propertyContact") propertyContactData:any;

}
