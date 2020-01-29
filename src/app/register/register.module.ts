import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfirmEqualValidatorDirective } from './directive/confirm-equal-validator.directive';
import { GratitudeComponent } from './components/gratitude/gratitude.component'



@NgModule({
  declarations: [RegisterComponent, ConfirmEqualValidatorDirective, GratitudeComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class RegisterModule { }
