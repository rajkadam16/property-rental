import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestTourformComponent } from './components/request-tourform/request-tourform.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MapComponent } from './components/map/map.component';
import { PropertyDataComponent } from './page/property-data/property-data.component';
import { PropertyMediaViewerComponent } from './page/property-media-viewer/property-media-viewer.component';
import { PropertyPhotosComponent } from './components/property-photos/property-photos.component';
import { PropertyFloorPlanComponent } from './components/property-floor-plan/property-floor-plan.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PropertyCardsComponent } from './components/property-cards/property-cards.component';
import { CommonModule } from '@angular/common';
import { FilterCardsPipe } from './core/pipes/filter-cards.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { PropertyDataFacilitiesComponent } from './components/property-data-facilities/property-data-facilities.component';
import { PropertyDataAdditionalInfoComponent } from './components/property-data-additional-info/property-data-additional-info.component';
import { PropertySchoolCardComponent } from './components/property-school-card/property-school-card.component';
import { AppartmentDataComponent } from './components/appartment-data/appartment-data.component';
import { ContactPropertyComponent } from './components/contact-property/contact-property.component';
import { PropertyMapViewComponent } from './page/property-map-view/property-map-view.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { AuthService } from './core/service/auth.service';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PropertiesComponent } from './page/dashboard/sections/properties/properties.component';
import { BookingsComponent } from './page/dashboard/sections/bookings/bookings.component';
import { EarningsComponent } from './page/dashboard/sections/earnings/earnings.component';
import { ReviewsComponent } from './page/dashboard/sections/reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    RequestTourformComponent,
    SendMessageComponent,
    NavBarComponent,
    MapComponent,
    PropertyDataComponent,
    PropertyMediaViewerComponent,
    PropertyPhotosComponent,
    PropertyFloorPlanComponent,
    PropertyCardsComponent,
    PropertyMediaViewerComponent,
    FilterCardsPipe,
    PropertyMapViewComponent,
    ImageCarouselComponent,
    PropertyDataFacilitiesComponent,
    PropertyDataAdditionalInfoComponent,
    PropertySchoolCardComponent,
    AppartmentDataComponent,
    ContactPropertyComponent,
    AddPropertyComponent,
    DashboardComponent,
    PropertiesComponent,
    BookingsComponent,
    EarningsComponent,
    ReviewsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    GoogleMapsModule, 
    NgxPaginationModule ,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }