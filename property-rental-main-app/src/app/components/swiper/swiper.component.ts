import { Component, Input } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent {
  @Input() img:string='';
}
