import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // private passwordRegExp: RegExp= /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  
  user = {
    email: '',
    password: '',
    _id: ''
  }

  constructor(private router: Router,
              private userservice: UserService) { }

  ngOnInit() {
  }

  signIn(login:NgForm) {
    
    this.userservice.signIn(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res['token'])
          this.router.navigate(['/wedding/my-wedding'])
          console.log(res);// este res devuelve el token en consola
        },
        err => console.log(err)
      )
      console.log('valor:',login.value)
      console.log(login)
  }

}
