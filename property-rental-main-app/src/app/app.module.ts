import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './page/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FeaturetteComponent } from './components/featurette/featurette.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PropertdatainfoComponent } from './components/propertdatainfo/propertdatainfo.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { PropertydataComponent } from './components/propertydata/propertydata.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestTourformComponent } from './components/request-tourform/request-tourform.component';
import { SendmessageComponent } from './components/sendmessage/sendmessage.component';
import { RequestboxComponent } from './components/requestbox/requestbox.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MapComponent } from './components/map/map.component';
import { PropertyDataComponent } from './page/property-data/property-data.component';
import { ListGroupNavbarComponent } from './components/list-group-navbar/list-group-navbar.component';
import { PropertyImgVidComponent } from './page/property-img-vid/property-img-vid.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PropertyPhotosComponent } from './components/property-photos/property-photos.component';
import { PropertyFloorPlanComponent } from './components/property-floor-plan/property-floor-plan.component';
import { PropertyVirtualToursComponent } from './components/property-virtual-tours/property-virtual-tours.component';
import { PropertyVideosComponent } from './components/property-videos/property-videos.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { PropertyCardsComponent } from './components/property-cards/property-cards.component';
import { PropertyMapViewComponent } from './page/property-map-view/property-map-view.component';
import { ShowPropertyCardsComponent } from './components/show-property-cards/show-property-cards.component';



@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    CardComponent,
    FooterComponent,
    SearchComponent,
    FaqsComponent,
    FeaturetteComponent,
    PagenotfoundComponent,
    PropertdatainfoComponent,
    SwiperComponent,
    PropertydataComponent,
    LoginComponent,
    SignupComponent,
    RequestTourformComponent,
    SendmessageComponent,
    RequestboxComponent,
    NavBarComponent,
    MapComponent,
    PropertyDataComponent,
    ListGroupNavbarComponent,
    PropertyImgVidComponent,
    TabsComponent,
    PropertyPhotosComponent,
    PropertyFloorPlanComponent,
    PropertyVirtualToursComponent,
    PropertyVideosComponent,
    PropertyCardsComponent,
    PropertyMapViewComponent,
    ShowPropertyCardsComponent

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    GoogleMapsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
