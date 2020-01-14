import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  couple: string = '';

  BoyBoy = false;
  GirlGirl = false;
  BoyGirl = false;
  otherEvent = false;

  user = {} // creamos objeto vacio que se va a ir

  constructor(public userservice: UserService,
              public router: Router) { }

  ngOnInit() {
  }

  toggleBoyBoy(value) {
    this.BoyBoy = value;
    this.GirlGirl = false;
    this.BoyGirl = false;
    this.otherEvent = false;
  }
  
  toggleGirlGirl(value) {
    this.GirlGirl = value;
    this.BoyGirl = false;
    this.BoyBoy = false;
    this.otherEvent = false;
  }
  toggleBoyGirl(value) {
    this.BoyGirl = value;
    this.BoyBoy = false;
    this.GirlGirl = false;
    this.otherEvent = false;
  }

  toggleOtherEvent(value) {
    this.otherEvent = value;
    this.GirlGirl = false;
    this.BoyGirl = false;
    this.BoyBoy = false;
  }

//----- - PASSWORD - ----- //
  public passwordType = 'password';
  confirmPassword: string;
  password: string;

  samePassword() {
    return (this.password === this.confirmPassword);
  }

  showPassword(){
    if(this.passwordType==='password'){
     this.passwordType = 'text';
    }else{
     this.passwordType = 'password';
    }
  } 


  signUp(form: NgForm) {
    //this.userservice.selectedUser.password = this.password;
    this.userservice.signUp(form.value)
      .subscribe(
        res => {
          console.log(res);
          console.log(this.password);
          localStorage.setItem('token', res['token']); // lo guardamos en la app para enviarlo siempre que sea necesario
          this.router.navigate(['/wedding/my-wedding'])
        },
        err => 
          console.log(err)
      )
    //console.log(form.value);
  }


}
