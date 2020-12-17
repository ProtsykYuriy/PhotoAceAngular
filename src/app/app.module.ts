import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderNavigationComponent } from './components/header/header-navigation/header-navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { ItemTypesNavigationComponent } from './components/home/item-types-navigation/item-types-navigation.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavigationComponent,
    HomeComponent,
    SearchBarComponent,
    ItemTypesNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
