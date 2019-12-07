import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestLandingComponent } from './components/guest-landing/guest-landing.component';
import { GuestConfirmationComponent } from './components/guest-confirmation/guest-confirmation.component';
import { GuestPresentsComponent } from './components/guest-presents/guest-presents.component';


const routes: Routes = [
  { path: 'landing', component: GuestLandingComponent },
  { path: 'confirmation', component: GuestConfirmationComponent },
  { path: 'presents', component: GuestPresentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
