import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterWeddingComponent } from './components/register-wedding/register-wedding.component';
import { WeddingComponent } from './components/wedding/wedding.component';
=======

import { SliderComponent } from './landing/components/slider/slider.component';
import { HeaderComponent } from './core/components/header/header.component';
>>>>>>> temp

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    LandingComponent,
    LoginComponent,
    RegisterWeddingComponent,
    WeddingComponent
=======
    HeaderComponent,
    SliderComponent
>>>>>>> temp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
