import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/service/alert.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contactForm:FormGroup;
  constructor(private readonly fb: FormBuilder, private readonly alertService: AlertService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      // Simulate a successful form submission
      this.alertService.showAlert('Message sent successfully! 🎉', 'success'); // Green
      console.log('Form submitted:', this.contactForm.value);
    } else {
      this.alertService.showAlert('Please fill in all fields correctly.', 'error'); // Red
    }
  }
                      
}
