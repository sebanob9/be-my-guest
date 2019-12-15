import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

}
