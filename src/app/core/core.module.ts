import { NgModule } from '@angular/core';
/* import { CommonModule } from '@angular/common'; */
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from '../landing/components/landing/landing.component';

const COMPONENTS = [
  ErrorComponent,
  HeaderComponent,
  FooterComponent,
  LandingComponent
];

const MODULES = [
  BrowserModule,
  HttpClientModule,
  NgbModule
]


@NgModule({
  declarations: [...COMPONENTS],
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
