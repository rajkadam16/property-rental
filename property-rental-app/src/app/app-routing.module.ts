import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';
import { PropertydetailsComponent } from './page/propertydetails/propertydetails.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    // path: 'propertydetails/:proId',
    path: 'propertydetails',
    component: PropertydetailsComponent,
  },
  { path: '**', component: PagenotfoundComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
