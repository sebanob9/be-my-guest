import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { GuestLandingComponent } from './components/guest-landing/guest-landing.component';
import { GuestConfirmationComponent } from './components/guest-confirmation/guest-confirmation.component';
import { GuestPresentsComponent } from './components/guest-presents/guest-presents.component';

import { GuestRoutingModule } from './guest-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatInputModule, } from '@angular/material';
import { GuestGratitudeComponent } from './components/guest-gratitude/guest-gratitude.component';


@NgModule({
  declarations: [GuestLandingComponent, GuestConfirmationComponent, GuestPresentsComponent, GuestGratitudeComponent ],
  imports: [
    SharedModule,
    GuestRoutingModule,
    FormsModule,
    CommonModule,
    MatSnackBarModule, 
  MatFormFieldModule, MatSelectModule, MatCheckboxModule, MatInputModule
  ]
})
export class GuestModule { }
