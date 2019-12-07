import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { WeddingRoutingModule } from './wedding-routing.module';

import { HomeComponent } from './components/home/home.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { GuestSortComponent } from './components/guest-sort/guest-sort.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PresentListComponent } from './components/present-list/present-list.component';




@NgModule({
  declarations: [HomeComponent, GuestListComponent, GuestSortComponent, GalleryComponent, PresentListComponent],
  imports: [
    SharedModule,
    WeddingRoutingModule
  ]
})
export class WeddingModule { }