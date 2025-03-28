import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private readonly alertMessage = new BehaviorSubject<string | null>('Welcome to Property Management! 🚀');
  alertMessage$ = this.alertMessage.asObservable();

  constructor() {
    // Automatically clear the welcome message after 3 seconds
    setTimeout(() => this.clearAlert(), 3000);
  }

  showAlert(message: string) {
    this.alertMessage.next(message);
    setTimeout(() => this.clearAlert(), 3000);
  }

  clearAlert() {
    this.alertMessage.next(null);
  }
}
