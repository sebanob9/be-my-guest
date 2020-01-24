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
    
  }

  addGift(form: NgForm) {
    console.log(form.value)
    this.giftService.postGift(form.value)    
      .subscribe (res => {
        this.resetForm(form); 
      });
  }

  resetForm(form?: NgForm) {
    if(form) {
      this.giftService.selectedGift = new Gift();
      form.reset();
    }
  }
}
