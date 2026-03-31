import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/service/alert.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contactForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly alertService: AlertService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.alertService.showAlert('Message sent successfully! 🎉', 'success');
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.alertService.showAlert('Please fill in all fields correctly.', 'error');
    }
  }
}
