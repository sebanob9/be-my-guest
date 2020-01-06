import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_API = 'http://localhost:3000/api/users';
  
  selectedUser : User;

  constructor(private http: HttpClient,
              private router: Router) {
    this.selectedUser = new User();
   }

  signUp(user: User) {
    return this.http.post(this.URL_API, user);
  }

  signIn(user: User) {
    return this.http.post(this.URL_API + '/login', user)
  }

  // metodo para comprobar si un usuario está logueado o no
  loggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }
  
  // Devuelve desde el localStorage el token guardado.. para usar en los headers  
  getToken() {
    return localStorage.getItem('token');
  }
  
  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  
}