import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestLandingComponent } from './components/guest-landing/guest-landing.component';
import { GuestConfirmationComponent } from './components/guest-confirmation/guest-confirmation.component';
import { GuestPresentsComponent } from './components/guest-presents/guest-presents.component';
import { GuestGratitudeComponent } from './components/guest-gratitude/guest-gratitude.component';


const routes: Routes = [
  {path: '', component: GuestLandingComponent}, 
  { path: 'confirmation', component: GuestConfirmationComponent },
  { path: 'presents', component: GuestPresentsComponent },
  { path: 'gratitude', component: GuestGratitudeComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
