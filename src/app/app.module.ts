import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

//deberian tener que borrarse
import { RegisterComponent } from './register/components/register/register.component';
import { LoginComponent } from './login/components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { GratitudeComponent } from './register/components/gratitude/gratitude.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    GratitudeComponent
  ],
  
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
