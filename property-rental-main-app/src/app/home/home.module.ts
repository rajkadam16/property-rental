import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from '../components/card/card.component';
import { FeaturetteComponent } from '../components/featurette/featurette.component';
import { FaqsComponent } from '../components/faqs/faqs.component';
import { SearchComponent } from '../components/search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CardComponent,
    FeaturetteComponent,
    FaqsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [FaqsComponent]
})
export class HomeModule { }
