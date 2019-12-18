import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(element) {
    if (element.value === "sebas"){
      localStorage.setItem("user", element.value);
      this.router.navigate(["/wedding/my-wedding"]);
    } else {
      alert("Usuario incorrecto");
    }
  }
}
