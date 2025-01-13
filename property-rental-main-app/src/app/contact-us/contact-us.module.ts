import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactusRoutingModule } from './contactus-routing.module';
import { HomeModule } from "../home/home.module";
// import { FaqsComponent } from '../components/faqs/faqs.component';



@NgModule({
  declarations: [
    ContactUsComponent,
    // FaqsComponent
  ],
  imports: [
    CommonModule,
    ContactusRoutingModule,
    HomeModule
],

})
export class ContactUsModule { }
