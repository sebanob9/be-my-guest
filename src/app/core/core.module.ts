import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [ErrorComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
