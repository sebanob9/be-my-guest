import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';


import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from '../landing/components/landing/landing.component';
import { BlogComponent } from './components/header/components/blog/blog.component';
import { ContactComponent } from './components/header/components/contact/contact.component';
import { AboutComponent } from './components/header/components/about/about.component';

import { UserGuard } from './guards/user.guard';

import {TokenInterceptorService} from './services/token-interceptor.service'
import { SharedModule } from '../shared/shared.module';


const COMPONENTS = [
  ErrorComponent,
  HeaderComponent,
  FooterComponent,
  LandingComponent
];

const MODULES = [
  SharedModule,
  BrowserModule,
  HttpClientModule,
  NgbModule
]


@NgModule({
  declarations: [...COMPONENTS, BlogComponent, ContactComponent, AboutComponent],
  providers: [
    { // con esta configuracion, todas las peticiones van a tener una cabecera extra
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    UserGuard],
  imports: [ 
    RouterModule,
    BrowserModule
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ]
})
export class CoreModule { }
