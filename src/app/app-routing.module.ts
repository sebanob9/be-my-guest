import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';
import { LandingComponent } from './landing/components/landing/landing.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./wedding/wedding.module').then(mod => mod.WeddingModule)},
  {path: 'guest', loadChildren: () => import('./guest/guest.module').then(mod => mod.GuestModule)},
  {path: 'landing', component: LandingComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
