import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators,  } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  valid:boolean = false;
signUp:FormGroup = new FormGroup ({
  firstName:new FormControl('',[Validators.maxLength(20),Validators.required]),
  lastName:new FormControl('',[Validators.required,Validators.maxLength(20)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8),]),
  acceptTerms: new FormControl(false,[Validators.requiredTrue]),
},
{ validators: this.passwordMatchValidator }
)

passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  
  return password === confirmPassword ? null : { mismatch: true };
}
onSubmit(){
  this.valid= true;
  if(this.signUp.invalid){
    return;
  }
  console.log(this.signUp.value);
}
reset(){
  this.signUp.reset();
}

}
