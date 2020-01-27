import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { UserService } from 'src/app/core/services/user.service';
//import { StorageService } from 'ngx-webstorage-service';
import { NgForm } from '@angular/forms';
import { GuestListComponent } from '../guest-list/guest-list.component';
import { GuestsService } from 'src/app/core/services/guests.service';
import { Guest } from 'src/app/core/models/guest';
import { TablesService } from 'src/app/core/services/tables.service';
import { GiftService } from 'src/app/core/services/gift.service';
import { Gift } from 'src/app/core/models/gift';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.scss']
})
export class MyEventComponent implements OnInit{
  constructor(public userservice: UserService,
    public guestsService: GuestsService,
    public tableService: TablesService,
    public giftService: GiftService) { }
  
public ukelele; 
public giftsfiltered;


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
    this.getGuests();
    this.getGifts();
  }

  getGuests() {
    this.guestsService.getGuest()
      .subscribe( res => {
        this.guestsService.guests2 = res as Guest[]; // OJO: guest2 al ser el servicio que apunta a la BBDD
        console.log(res);
      });
  }

  getukelele() {
    this.giftsfiltered = this.giftService.gifts.filter(gift => gift.guestName !== null).length;
  }
  
  getGifts() {
    this.giftService.getGifts()
      .subscribe(res => {
        this.giftService.gifts = res as Gift[];
        this.getukelele()
        console.log(res);
      })
  }

  // --- Material ---
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

  isReadOnly: boolean = true;
  status: boolean = false;
  isDisabled(){
    this.status = !this.status;
    this.isReadOnly = !this.isReadOnly;
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
  showCopied : boolean = false
  
  
    copyLink(val: string){
      this.showCopied = true;
    setTimeout(function(){this.showCopied = !this.showCopied}.bind(this), 300000);
      let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
      }

  

  // 

  saveUserData(form?: NgForm) {
    console.log(form.value);
    this.status = !this.status;
    this.isReadOnly = !this.isReadOnly;
    this.userservice.saveUserById(form.value).subscribe(response => {
      console.log('response:', response);
      window.location.reload();
    });
    
  }

} 