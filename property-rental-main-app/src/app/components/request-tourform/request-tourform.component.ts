import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { api } from 'src/app/core/constant/api/api';
import { CommonUtilitiesService } from 'src/app/core/service/common-utilities.service';
@Component({
  selector: 'app-request-tourform',
  templateUrl: './request-tourform.component.html',
  styleUrls: ['./request-tourform.component.css'],
})
export class RequestTourformComponent implements OnInit {
propertyName:any[]=[]

  submitted: boolean = false
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

constructor(private propertyData:CommonUtilitiesService){}
  ngOnInit(): void {
   this.propertyData.parseJsonFile(api.propertyData).subscribe((res:any)=>{
    this.propertyName=res.name
   })
  }



  // async sendEmail(){
  //   emailjs.init('okGSde90IJRSKKcdy')
  //  let response = await  emailjs.send("service_8ngt4aj","template_igoc5fv",{
  //   from_name: this.sendMeassgeForm.value.firstName && this.sendMeassgeForm.value.lastName,
  //   firstname: this.sendMeassgeForm.value.firstName ,
  //   lastname: this.sendMeassgeForm.value.lastName,
  //   propertyname: this.propertyName,
  //   date: this.sendMeassgeForm.value.date,
  //       });;
  //       alert("request accepted")
  //   }
}
