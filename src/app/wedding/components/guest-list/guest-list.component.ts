import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/core/models/guest';
import { GuestsService } from 'src/app/core/services/guests.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  constructor(public guestsService: GuestsService) { }

  ngOnInit() {
    this.getGuests();
  }
  
  getGuests() {
    this.guestsService.getGuest()
      .subscribe( res => {
        this.guestsService.guests2 = res as Guest[]; // OJO: guest2 al ser el servicio que apunta a la BBDD
        console.log(res);
      });
  }
}
