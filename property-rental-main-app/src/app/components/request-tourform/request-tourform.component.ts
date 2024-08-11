import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-tourform',
  templateUrl: './request-tourform.component.html',
  styleUrls: ['./request-tourform.component.css'],
})
export class RequestTourformComponent {


  submitted: boolean = false
constructor() { }
sendMeassgeForm: FormGroup = new FormGroup({
  firstName : new FormControl ('',[Validators.required,Validators.maxLength(30)]),
  lastName : new FormControl ('',[Validators.required,Validators.maxLength(30)]),
  email : new FormControl ('',[Validators.required,Validators.email]),
  date : new FormControl ('',[Validators.required]),
  message : new FormControl ('',[Validators.required,Validators.maxLength(500)]),
  phone : new FormControl ('',[Validators.required,Validators.maxLength(15)]),
  acceptTerms: new FormControl(false, [Validators.requiredTrue]),
})
onSubmit() {
  this.submitted = true;
  if(this.sendMeassgeForm.invalid){
    return;
  }
  console.log(this.sendMeassgeForm.value);
}
reset()
{
  this.sendMeassgeForm.reset();
}
}
