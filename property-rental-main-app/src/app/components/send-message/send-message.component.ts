import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
  @Input("propertyInfo") propertyInfo:any
    submitted: boolean = false;
   

  constructor() { }
  sendMessage: FormGroup = new FormGroup({
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
    coustomMessage: new FormControl('', []),
  });

  onSubmit() {
    this.submitted = true;
    if (this.sendMessage.invalid) {
      return;
    }

  }



  async sendEmail() {
    emailjs.init('okGSde90IJRSKKcdy');
    let response = await emailjs.send("service_r7mi3h9","template_bj18bsj",{
        from_name: this.sendMessage.value.firstName + " " + this.sendMessage.value.lastName,
        firstname: this.sendMessage.value.firstName,
        propertyname: this.propertyInfo.propertyName,
        date: this.sendMessage.value.tourDate,
        phoneNo: this.sendMessage.value.phoneNumber,
        message: this.sendMessage.value.coustomMessage,
        reply_to: this.sendMessage.value.email,
    });
    alert('Mesaage sent successfully');
    
}

reset() {
  this.submitted = false;
  this.sendMessage.reset();
}
}
