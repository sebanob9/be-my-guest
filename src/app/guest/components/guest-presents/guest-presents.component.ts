import { Component, OnInit } from '@angular/core';
import { User} from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-guest-presents',
  templateUrl: './guest-presents.component.html',
  styleUrls: ['./guest-presents.component.scss']
})
export class GuestPresentsComponent implements OnInit {

  constructor(public userservice: UserService) { }

  ngOnInit() {
    let _id = localStorage.getItem('_id');
  }

  saveUserData(form?: NgForm) {
    console.log(form.value);
    this.userservice.saveUserById(form.value).subscribe(response => {
      console.log('response', response)
    })
  }
}
