import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './page/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FeaturetteComponent } from './components/featurette/featurette.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestTourformComponent } from './components/request-tourform/request-tourform.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MapComponent } from './components/map/map.component';
import { PropertyDataComponent } from './page/property-data/property-data.component';
import { PropertyMediaViewerComponent } from './page/property-media-viewer/property-media-viewer.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PropertyPhotosComponent } from './components/property-photos/property-photos.component';
import { PropertyFloorPlanComponent } from './components/property-floor-plan/property-floor-plan.component';
import { PropertyVirtualToursComponent } from './components/property-virtual-tours/property-virtual-tours.component';
import { PropertyVideosComponent } from './components/property-videos/property-videos.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PropertyCardsComponent } from './components/property-cards/property-cards.component';
import { ShowPropertyCardsComponent } from './components/show-property-cards/show-property-cards.component';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';
import { CommonModule } from '@angular/common';
import { FilterCardsPipe } from './core/pipes/filter-cards.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PropertyMapViewComponent } from './page/property-map-view/property-map-view.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { DropDownPipe } from './core/pipes/drop-down.pipe';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { PropertyDataFacilitiesComponent } from './components/property-data-facilities/property-data-facilities.component';
import { PropertyDataAdditionalInfoComponent } from './components/property-data-additional-info/property-data-additional-info.component';
import { PropertySchoolCardComponent } from './components/property-school-card/property-school-card.component';
import { AppartmentDataComponent } from './components/appartment-data/appartment-data.component';
import { ContactPropertyComponent } from './components/contact-property/contact-property.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    CardComponent,
    FooterComponent,
    SearchComponent,
    FaqsComponent,
    FeaturetteComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    RequestTourformComponent,
    SendMessageComponent,
    NavBarComponent,
    MapComponent,
    PropertyDataComponent,
    PropertyMediaViewerComponent,
    TabsComponent,
    PropertyPhotosComponent,
    PropertyFloorPlanComponent,
    PropertyVirtualToursComponent,
    PropertyVideosComponent,
    PropertyCardsComponent,
    PropertyMediaViewerComponent,
    ShowPropertyCardsComponent,
    SubNavbarComponent,
    FilterCardsPipe,
    TabsComponent,
    PropertyMapViewComponent,
    ContactUsComponent,
    DropDownPipe,
    ImageCarouselComponent,
    PropertyDataFacilitiesComponent,
    PropertyDataAdditionalInfoComponent,
    PropertySchoolCardComponent,
    AppartmentDataComponent,
    ContactPropertyComponent

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
