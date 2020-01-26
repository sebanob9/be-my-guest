import { Component, OnInit } from '@angular/core';
import { GiftService } from 'src/app/core/services/gift.service';
import { NgForm } from '@angular/forms';
import { Gift } from 'src/app/core/models/gift';


@Component({
  selector: 'app-present-list',
  templateUrl: './present-list.component.html',
  styleUrls: ['./present-list.component.scss']
})
export class PresentListComponent implements OnInit {

  constructor(public giftService: GiftService) { }

  ngOnInit() {
    this.getGifts();
  }

  addGift(form: NgForm) {
    console.log(form.value);
    console.log('esto busco', form.value.guestName)
    this.giftService.postGift(form.value)    
      .subscribe (res => {
        this.resetForm(form); 
      });
      this.getGifts();
  }

  getGifts() {
    this.giftService.getGifts()
      .subscribe (res => {
        this.giftService.gifts = res as Gift[];
        console.log(res);
      })
  }

  deleteGift(_id: string) {
    if(confirm('¿Estas seguro de querer eliminar este regalo?'))
      this.giftService.deleteGift(_id)
        .subscribe(res => {
          this.getGifts();
        });
    }

  resetForm(form?: NgForm) {
    if(form) {
      this.giftService.selectedGift = new Gift();
      form.reset();
    }
  }
}
