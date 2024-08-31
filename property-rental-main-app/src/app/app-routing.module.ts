import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PropertyDataComponent } from './page/property-data/property-data.component';
import { PropertyMediaViewerComponent } from './page/property-media-viewer/property-media-viewer.component';
import { PropertyMapViewComponent } from './page/property-map-view/property-map-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'propertydetails/:id',
    component: PropertyDataComponent,
  },
  {
    path: 'PropertyMediaView',
    component: PropertyMediaViewerComponent,
  },

  {
    path: 'PropertyMapView',
    component: PropertyMapViewComponent,
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