import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { PropertyDataComponent } from './page/property-data/property-data.component';
import { PropertyMediaViewerComponent } from './page/property-media-viewer/property-media-viewer.component';
import { PropertyMapViewComponent } from './page/property-map-view/property-map-view.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { authGuardGuard } from './core/guards/auth-guard.guard';
import { PropertiesComponent } from './page/dashboard/sections/properties/properties.component';
import { BookingsComponent } from './page/dashboard/sections/bookings/bookings.component';
import { EarningsComponent } from './page/dashboard/sections/earnings/earnings.component';
import { ReviewsComponent } from './page/dashboard/sections/reviews/reviews.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'propertydetails/:id',
    component: PropertyDataComponent,
    children: [
      {
        path: 'PropertyMediaView',
        component: PropertyMediaViewerComponent,
      },
    ],
  },

  {
    path: 'FindProperty',
    component: PropertyMapViewComponent,
  },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuardGuard],
    children: [
      { path: 'properties', component: PropertiesComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'earnings', component: EarningsComponent },
      { path: 'reviews', component: ReviewsComponent },
      { path: '', redirectTo: '/dashboard/properties', pathMatch: 'full' }
    ]
    
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'addproperty',
    component: AddPropertyComponent,
    canActivate: [authGuardGuard],
  },
  {
    path: 'contactus',
    loadChildren: () =>
      import('./contact-us/contact-us.module').then((m) => m.ContactUsModule),
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
