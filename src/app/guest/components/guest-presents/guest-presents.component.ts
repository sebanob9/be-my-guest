import { Component, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GiftService } from 'src/app/core/services/gift.service';
import { Gift } from 'src/app/core/models/gift';



@Component({
  selector: 'app-guest-presents',
  templateUrl: './guest-presents.component.html',
  styleUrls: ['./guest-presents.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GuestPresentsComponent {

  protected userInfo: object = new User;
  constructor(public userservice: UserService,
    public giftService: GiftService) { }

  ngOnInit() {
    this.getGifts();
    let userId = localStorage.getItem('userId');
    this.userservice.getUserInfoByUserId(userId).subscribe((response) => {
      this.userInfo = response;
    });
  }

  cheapGift = false;
  middleGift = false;
  expensiveGift = false;

  public guestID = localStorage.getItem('guestName');



  cheapGifts() {
    this.cheapGift = !this.cheapGift
  }
  middleGifts() {
    this.middleGift = !this.middleGift;
  }
  expensiveGifts() {
    this.expensiveGift = !this.expensiveGift;
  }

  getGifts() {
    this.giftService.getGifts()
      .subscribe(res => {
        this.giftService.gifts = res as Gift[];
        console.log(res);
      })
  }

  editGift(gift: Gift) {
    this.giftService.selectedGift = gift;
  }
  ukelele: string;
  addGift(form?: NgForm) {
        //this.giftService.selectedGift.guestName = this.guestName;

    this.giftService.putGift(form.value)
      .subscribe(res => {
        this.getGifts();
      });
    this.giftService.selectedGift.guestName = this.guestID;
    
      
  }
  
  /* giveName() {
    console.log(this.guestName);
  } */
}
