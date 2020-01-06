import { Component, OnInit } from '@angular/core';
import { User} from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guest-presents',
  templateUrl: './guest-presents.component.html',
  styleUrls: ['./guest-presents.component.css']
})
export class GuestPresentsComponent implements OnInit {

  constructor(public userservice: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  user: User;
 

  signUp(form: NgForm) {
    this.userservice.signUp(form.value)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res['token']); // lo guardamos en la app para enviarlo siempre que sea necesario
          this.router.navigate(['/wedding/my-wedding'])
        },
        err => 
          console.log(err)
      )
    //console.log(form.value);
  }
}
