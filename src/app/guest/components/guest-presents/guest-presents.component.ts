import { Component, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GiftService } from 'src/app/core/services/gift.service';
import { Gift } from 'src/app/core/models/gift';
import {
  Element as StripeElement,
  ElementsOptions
} from 'ngx-stripe';


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
  
  handler:any = null;
  elementsOptions: ElementsOptions = {
    locale: 'es'
  };

  ngOnInit() {
    this.getGifts();
    let userId = localStorage.getItem('userId');
    this.userservice.getUserInfoByUserId(userId).subscribe((response) => {
      this.userInfo = response;
    });
    this.all();
    this.loadStripe()
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

   // ---------- STRIPE -----------//
  //------------------------------//
  loadStripe() {
    if(!window.document.getElementById('stripe-script')) {
      let s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
}

pay(amount) {    
  let handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
    locale: 'es',
    currency: 'eur',
    tokelocalen: function (token2: any) {
      // se puede acceder al token mediante `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token2)
      // alert('Token Created!!');
    }
  });
  handler.open({
    name: 'Regalo boda',
    //description: '2 widgets',
    amount: amount * 100,
  });
}
 
}
