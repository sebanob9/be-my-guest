import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestLandingComponent } from './components/guest-landing/guest-landing.component';


const routes: Routes = [
  { path: '', component: GuestLandingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
