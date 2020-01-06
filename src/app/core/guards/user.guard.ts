import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private userservice: UserService,
              private router: Router) {}

  // funcion que comprueba si existe el token. si existe, devuelve un true y continua con la ruta que queremos acceder 
  canActivate(): boolean { 
    if (this.userservice.loggedIn() === true) {
      return true
    }
    this.router.navigate(['/login']);
    return false;
  }
   
  
}
