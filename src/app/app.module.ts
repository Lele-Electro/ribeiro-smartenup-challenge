import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { GamesSelectorSectionComponent } from './components/games-selector-section/games-selector-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingSectionComponent,
    ImageCarouselComponent,
    GamesSelectorSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
