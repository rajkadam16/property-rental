import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactusRoutingModule } from './contactus-routing.module';
import { HomeModule } from "../home/home.module";

@NgModule({
  declarations: [
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactusRoutingModule,
    HomeModule
  ],
})
export class ContactUsModule { }
