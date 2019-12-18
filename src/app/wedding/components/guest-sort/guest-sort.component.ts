import { Component, OnInit } from '@angular/core';
import { GuestsService } from 'src/app/core/services/guests.service';

@Component({
  selector: 'app-guest-sort',
  templateUrl: './guest-sort.component.html',
  styleUrls: ['./guest-sort.component.scss']
})
export class GuestSortComponent implements OnInit {
  private tableList: object[] = [];
  private guestList: object[] = [];
  private modalLoaded: boolean = false;
  private actualTable: number;
  constructor(private guestsService: GuestsService) { }

  ngOnInit() {
    this.guestList = this.guestsService.getGuestList();
  }

  createTable() {
    this.tableList.push({name: "Mesa" + (this.tableList.length + 1), guestList: [], maxGuestCount: 20})
  }

  editTable(tableId) {    
    this.actualTable = tableId;
    this.modalLoaded = true;
  }

}
