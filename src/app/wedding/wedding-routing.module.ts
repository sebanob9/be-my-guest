import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { GuestSortComponent } from './components/guest-sort/guest-sort.component';
import { PresentListComponent } from './components/present-list/present-list.component';
import { MyEventComponent } from './components/my-event/my-event.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
    children: [
      { path: 'my-wedding', component: MyEventComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'guest-list', component: GuestListComponent },
      { path: 'guest-sort', component: GuestSortComponent },
      { path: 'present-list', component: PresentListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingRoutingModule { }

