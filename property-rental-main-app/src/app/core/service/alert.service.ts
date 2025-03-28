import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertMessage = new BehaviorSubject<string | null>(null);
  alertMessage$ = this.alertMessage.asObservable();

  private alertType = new BehaviorSubject<string>('success'); // Default is success
  alertType$ = this.alertType.asObservable();

  showAlert(message: string, type: 'success' | 'error' | 'warning' = 'success') {
    this.alertMessage.next(message);
    this.alertType.next(type);

    // Hide after 3 seconds
    setTimeout(() => this.clearAlert(), 3000);
  }

  clearAlert() {
    this.alertMessage.next(null);
  }
}
