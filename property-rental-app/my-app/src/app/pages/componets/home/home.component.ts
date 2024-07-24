import { Component } from '@angular/core';
import { SearchComponent } from "../../../shared/reuseable/search/search.component";
import { CardComponent } from "../../../shared/reuseable/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
