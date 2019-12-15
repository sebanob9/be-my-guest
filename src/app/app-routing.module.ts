import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/components/error/error.component';
import { LandingComponent } from './landing/components/landing/landing.component';

import { RegisterComponent } from './register/components/register/register.component';
import { LoginComponent } from './login/components/login/login.component';
import { BlogComponent } from './core/components/header/components/blog/blog.component';
import { AboutComponent } from './core/components/header/components/about/about.component';
import { ContactComponent } from './core/components/header/components/contact/contact.component';


const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'wedding', loadChildren: () => import('./wedding/wedding.module').then(mod => mod.WeddingModule)}, 
  {path: 'guest', loadChildren: () => import('./guest/guest.module').then(mod => mod.GuestModule)},
  {path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},  
  {path: 'register', component: RegisterComponent}, 
  {path: 'blog', component: BlogComponent},
  {path: 'about', component: AboutComponent}, 
  {path: 'contact', component: ContactComponent}, 
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }