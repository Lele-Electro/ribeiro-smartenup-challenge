import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingSectionComponent } from './sections/landing-section/landing-section.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { GamesSelectorSectionComponent } from './sections/games-selector-section/games-selector-section.component';
import { CallToActionSectionComponent } from './sections/call-to-action-section/call-to-action-section.component';
import { TopGamesSectionComponent } from './sections/top-games-section/top-games-section.component';
import { TestimonialsCarouselSectionComponent } from './sections/testimonials-carousel-section/testimonials-carousel-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TextBannerComponent } from './components/text-banner/text-banner.component';
import { ButtonYinComponent } from './components/button-yin/button-yin.component';
import { ButtonYangComponent } from './components/button-yang/button-yang.component';
import { LiveDemoCardComponent } from './components/live-demo-card/live-demo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingSectionComponent,
    ImageCarouselComponent,
    GamesSelectorSectionComponent,
    CallToActionSectionComponent,
    TopGamesSectionComponent,
    TestimonialsCarouselSectionComponent,
    FooterComponent,
    NavBarComponent,
    TextBannerComponent,
    ButtonYinComponent,
    ButtonYangComponent,
    LiveDemoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
