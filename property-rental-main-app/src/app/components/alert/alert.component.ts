import { Component } from '@angular/core';
import { AlertService } from 'src/app/core/service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  message$ = this.alertService.alertMessage$;
  alertType$ = this.alertService.alertType$;

  constructor(private alertService: AlertService) {}

  closeAlert() {
    this.alertService.clearAlert();
  }
}
