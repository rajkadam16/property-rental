import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';
@Component({
  selector: 'app-request-tourform',
  templateUrl: './request-tourform.component.html',
  styleUrls: ['./request-tourform.component.css'],
})
export class RequestTourformComponent  {
  @Input("propertyInfo") propertyInfo:any;
  requestTourForm: FormGroup;
  propertyName: any[] = [];
  submitted: boolean = false;

  constructor(private readonly formBuilder: FormBuilder) {
    this.requestTourForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(30)]],
      lastName: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }



  onSubmit() {
    this.submitted = true;

    if (this.requestTourForm.invalid) {
      return;
    }
  }

  async sendEmail() {
      emailjs.init('okGSde90IJRSKKcdy');
      let response = await emailjs.send('service_8ngt4aj', 'template_igoc5fv', {
        from_name: `${this.requestTourForm.value.firstName} ${this.requestTourForm.value.lastName}`,
        firstname: this.requestTourForm.value.firstName,
        lastname: this.requestTourForm.value.lastName,
        propertyname: this.propertyInfo.propertyName,
        date: this.requestTourForm.value.date,
      });
      alert('Request accepted');
      // console.log('sending request for tour', response.status);
  }

  reset() {
    this.requestTourForm.reset();
    this.submitted = false;
  }
  
}