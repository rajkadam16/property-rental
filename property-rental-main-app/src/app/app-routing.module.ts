import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PropertyDataComponent } from './page/property-data/property-data.component';
import { PropertyMediaViewerComponent } from './page/property-media-viewer/property-media-viewer.component';
import { PropertyMapViewComponent } from './page/property-map-view/property-map-view.component';


const routes: Routes = [
  { path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
     },
  {
    path: 'propertydetails/:id',
    component: PropertyDataComponent,
    children: [
      {
        path: 'PropertyMediaView',
        component: PropertyMediaViewerComponent,
      },
      ]
  },

  {
    path: 'PropertyMapView',
    component: PropertyMapViewComponent,
  },
  {
    path: 'contactus',
    loadChildren:()=> import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  { path: '**', component: PageNotFoundComponent },
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

