import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';

@Component({
  selector: 'app-show-property-cards',
  templateUrl: './show-property-cards.component.html',
  styleUrls: ['./show-property-cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowPropertyCardsComponent{

}
