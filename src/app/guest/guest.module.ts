import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { GuestLandingComponent } from './components/guest-landing/guest-landing.component';
import { GuestConfirmationComponent } from './components/guest-confirmation/guest-confirmation.component';
import { GuestPresentsComponent } from './components/guest-presents/guest-presents.component';

import { GuestRoutingModule } from './guest-routing.module';


@NgModule({
  declarations: [GuestLandingComponent, GuestConfirmationComponent, GuestPresentsComponent],
  imports: [
    SharedModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
