import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { WeddingRoutingModule } from './wedding-routing.module';

import { HomeComponent } from './components/home/home.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { GuestSortComponent } from './components/guest-sort/guest-sort.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PresentsComponent } from './components/presents/presents.component';




@NgModule({
  declarations: [HomeComponent, GuestListComponent, GuestSortComponent, GalleryComponent, PresentsComponent],
  imports: [
    SharedModule,
    WeddingRoutingModule
  ]
})
export class WeddingModule { }
