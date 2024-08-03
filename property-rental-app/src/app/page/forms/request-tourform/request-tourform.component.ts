import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-tourform',
  templateUrl: './request-tourform.component.html',
  styleUrls: ['./request-tourform.component.css'],
})
export class RequestTourformComponent {
  valid: boolean = false;

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
    this.valid = true;
    if (this.requestTourForm.invalid) {
      return;
    }
    console.log(this.requestTourForm.value);
  }

  reset() {
    this.requestTourForm.reset();
  }
}
