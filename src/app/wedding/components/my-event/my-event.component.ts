import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { UserService } from 'src/app/core/services/user.service';
import { StorageService } from 'ngx-webstorage-service';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.scss']
})
export class MyEventComponent implements OnInit{
  constructor(public userservice: UserService) { }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  protected userInfo: object = null;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Familia'},
    {name: 'Trabajo'},
    {name: 'GYM'},
  ];

  ngOnInit() {
    let userId = localStorage.getItem('userId');
    this.userservice.getUserInfoByUserId(userId).subscribe((response) => {
      this.userInfo = response;
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    
  }

  /* add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    let list = [];
    if (localStorage.getItem("chips")) {
      let list = JSON.parse(localStorage.getItem("chips"));
    }
   
    list.push(event.value);
    localStorage.setItem("chips", JSON.stringify(list));
  } */

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }  
  
  // copiar enlace del input
  copyLink(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

  // 

  saveUserData(userForm) {
    console.log(userForm.email);
    const newUser = {
      email: userForm.email,
      password: userForm.password,
      phone: userForm.phone,
      date: userForm.date
    }

    this.userservice.saveUserById(localStorage.getItem('userId'), newUser).subscribe();
  }


}
