import { NgModule,LOCALE_ID} from '@angular/core';
import localeEs from '@angular/common/locales/es';

import { SharedModule } from '../shared/shared.module';

import { WeddingRoutingModule } from './wedding-routing.module';

import { HomeComponent } from './components/home/home.component';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { GuestSortComponent } from './components/guest-sort/guest-sort.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PresentListComponent } from './components/present-list/present-list.component';
import { MyEventComponent } from './components/my-event/my-event.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { CommonModule, registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
import { MatDialogModule } from '@angular/material/dialog';
import { TableDialogComponent } from './components/table-dialog/table-dialog.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    GuestListComponent,
    GuestSortComponent,
    GalleryComponent,
    PresentListComponent,
    MyEventComponent,
    TableDialogComponent,
  ],

  imports: [
    SharedModule,
    WeddingRoutingModule,
    MatChipsModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  entryComponents: [
    TableDialogComponent
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ]
})
export class WeddingModule { }