import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLandingComponent } from './components/guest-landing/guest-landing.component';
import { GuestConfirmationComponent } from './components/guest-confirmation/guest-confirmation.component';
import { GuestPresentsComponent } from './components/guest-presents/guest-presents.component';



@NgModule({
  declarations: [GuestLandingComponent, GuestConfirmationComponent, GuestPresentsComponent],
  imports: [
    CommonModule
  ]
})
export class GuestModule { }
