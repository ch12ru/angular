import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PredictionDerailsComponent } from './prediction-derails/prediction-derails.component';
import { MegaDashboardComponent } from './mega-dashboard/mega-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PredictionDerailsComponent,
    MegaDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,NgxUsefulSwiperModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
