import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfirmEqualValidatorDirective } from './directive/confirm-equal-validator.directive'






@NgModule({
  declarations: [RegisterComponent, ConfirmEqualValidatorDirective],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule
  ]
})
export class RegisterModule { }
