import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators,  } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  valid:boolean =false;
  from_name:string= "raj kadam"
  signUp: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    // confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  }, 
  // { validators: this.passwordMatchValidator }
);
  
  // passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  //   const password = control.get('password')?.value;
  //   const confirmPassword = control.get('confirmPassword')?.value;
  //   return password === confirmPassword ? null : { mismatch: true };
  // }
  
  onSubmit() {
    this.valid = true;
    if (this.signUp.invalid) {
      return;
    }
  }
  
  //  async sendEmail(){
  //   emailjs.init('okGSde90IJRSKKcdy')
  //  let response = await   emailjs.send("service_8ngt4aj","template_jj9hwlb",{
  //       from_name: this.from_name,
  //       to_name: this.signUp.value.firstName,
  //       first_name: this.signUp.value.firstName,
  //       last_name: this.signUp.value.lastName,
  //       reply_to: this.signUp.value.firstName && this.signUp.value.lastName,
  //       email:this.signUp.value.email
  //       });;
  //   }

    reset() {
      this.signUp.reset();
      this.valid = false; 
    }
}
