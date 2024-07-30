import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { FooterComponent } from './page/footer/footer.component';
import { SearchComponent } from './shared/reuesable/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FaqsComponent } from './page/faqs/faqs.component';
import { FeaturetteComponent } from './page/featurette/featurette.component';
import { CardComponent } from './page/card/card.component';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';
import { PropertydetailsComponent } from './page/propertydetails/propertydetails.component';
import { SwiperComponent } from './page/swiper/swiper.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    FaqsComponent,
    FeaturetteComponent,
    CardComponent,
    PagenotfoundComponent,
    PropertydetailsComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
