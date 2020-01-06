import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../core/services/token-interceptor.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    FormsModule
  ],
  providers: [
    { // con esta configuracion, todas las peticiones van a tener una cabecera extra
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
    exports: [
      LoginComponent,
    ]
})
export class LoginModule { }
