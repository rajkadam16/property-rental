import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PropertyDataComponent } from './page/property-data/property-data.component';
import { PropertyMediaViewerComponent } from './page/property-media-viewer/property-media-viewer.component';
import { PropertyMapViewComponent } from './page/property-map-view/property-map-view.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { authguardGuard } from './core/guards/authguard.guard';


const routes: Routes = [
  {
    path: '',
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
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }, // Ensure you have a HomeComponent
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'addproperty',
    component: AddPropertyComponent,
    // canActivate: [authguardGuard],
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
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
export class AppRoutingModule { }

