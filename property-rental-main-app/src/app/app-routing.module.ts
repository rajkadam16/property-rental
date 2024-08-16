import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { PropertyDataComponent } from './page/property-data/property-data.component';
import { PropertyImgVidComponent } from './page/property-img-vid/property-img-vid.component';
import { PropertyMapViewComponent } from './page/property-map-view/property-map-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  // {
  //   // path: 'propertydetails/:proId',
  //   path: 'propertydetails',
  //   component: PropertydetailsComponent,
  // },

  {
    path: 'propertydetails',
    component: PropertyDataComponent,
  },
  {
    path: 'propertyImgVid',
    component: PropertyImgVidComponent,
  },
  {
    path: 'PropertyMapView',
    component: PropertyMapViewComponent,
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