import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: '',
    _id: ''
  }

  constructor(private router: Router,
              private userservice: UserService) { }

  ngOnInit() {
  }

  signIn() {
    this.userservice.signIn(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res['token'])
          this.router.navigate(['/wedding/my-wedding'])
          console.log(res);// este res devuelve el token en consola
        },
        err => console.log(err)
      )
  }

// metodo de kike
/*   login(element) {
    if (element.value === "sebas"){
      localStorage.setItem("user", element.value);
      this.router.navigate(["/wedding/my-wedding"]);
    } else {
      alert("Usuario incorrecto");
    }
  } */
}
