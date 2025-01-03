import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {
    path: '',
    component: ContactUsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
