import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasicGroupByOptions } from 'rxjs';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
    submitted: boolean = false;

  constructor() { }
  requestTourForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    tourDate: new FormControl('', [Validators.required]),
    acceptTerms: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    this.submitted = true;
    if (this.requestTourForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.requestTourForm.value));
  }

  reset() {
    this.submitted = false;
    this.requestTourForm.reset();
  }

}
