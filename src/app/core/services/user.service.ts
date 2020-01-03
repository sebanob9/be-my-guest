import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_API = 'http://localhost:3000/api/users';
  
  selectedUser : User;

  constructor(private http: HttpClient) {
    this.selectedUser = new User();
   }

  signUp(user: User) {
    return this.http.post(this.URL_API, user);
  }

  signIn(user: User) {
    return this.http.post(this.URL_API + '/login', user)
  }

}