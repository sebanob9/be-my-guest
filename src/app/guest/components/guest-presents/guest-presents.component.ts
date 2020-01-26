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
  public giftService: GiftService,
  private router: Router) { }
  ngOnInit() {
    
    this.getGifts();
    let userId = localStorage.getItem('userId');
    this.userservice.getUserInfoByUserId(userId).subscribe((response) => {
      this.userInfo = response;
    });
    this.all();
  }

  cheapGift = false;
  middleGift = false;
  expensiveGift = false;
  public allGifts ;

  public guestID = localStorage.getItem('guestName');

  
  
  all() {
    this.giftService.gifts = this.allGifts;
    console.log(this.giftService.gifts);
  }

  cheapGifts() {
    this.giftService.gifts = this.allGifts;
    console.log(this.allGifts);
     this.giftService.gifts = this.giftService.gifts.filter(gift => gift.price <100);
  }

  middleGifts() {
    this.giftService.gifts = this.allGifts;
    this.giftService.gifts = this.giftService.gifts.filter(gift => gift.price >=100 && gift.price <300 );
  }

  expensiveGifts() {
    this.giftService.gifts = this.allGifts;
    this.giftService.gifts = this.giftService.gifts.filter(gift => gift.price >300);

  }

  getGifts() {
   this.giftService.getGifts()
      .subscribe(res => {
    this.allGifts = res as Gift[];
        return Gift;
      })
      
  }

  editGift(gift: Gift) {
    this.giftService.selectedGift = gift;
  }
  
  addGift(form?: NgForm) {
    this.giftService.putGift(form.value)
      .subscribe(res => {
        this.getGifts();
      });
    this.giftService.selectedGift.guestName = this.guestID;
    this.navigateGratitude()
  }
  
  navigateGratitude() {
    this.router.navigate(['/guest/gratitude'])
  }

 
}
