import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [RegisterComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class RegisterModule { }
