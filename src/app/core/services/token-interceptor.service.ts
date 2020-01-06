import { Injectable } from '@angular/core';
import {HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor} from '@angular/common/http'
import { UserService } from 'src/app/core/services/user.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private userservice: UserService) { }
  ngOnInit() {
  }


  // para establecer cabeceras nuevas. una cabecera por cada nueva peticion 
/*   intercept(req, next) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userservice.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  } */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userservice.getToken()}`
      }
    });

    return next.handle(request);
  }
  
}
