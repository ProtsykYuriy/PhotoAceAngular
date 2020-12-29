import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderNavigationComponent } from './components/header/header-navigation/header-navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { ItemTypesNavigationComponent } from './components/home/item-types-navigation/item-types-navigation.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ItemsModule } from './components/items/items.module';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { WeAreSocialComponent } from './components/home/we-are-social/we-are-social.component';
import { OurAddressComponent } from './components/home/our-address/our-address.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavigationComponent,
    HomeComponent,
    SearchBarComponent,
    ItemTypesNavigationComponent,
    CarouselComponent,
    AboutUsComponent,
    WeAreSocialComponent,
    OurAddressComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ItemsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
