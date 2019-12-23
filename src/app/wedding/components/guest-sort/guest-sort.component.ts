import { Component, OnInit } from '@angular/core';
import { GuestsService } from 'src/app/core/services/guests.service';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';
import { TablesService } from 'src/app/core/services/tables.service';


@Component({
  selector: 'app-guest-sort',
  templateUrl: './guest-sort.component.html',
  styleUrls: ['./guest-sort.component.scss']
})
export class GuestSortComponent implements OnInit {
  protected tableList: object[] = [];
  protected guestList: object[] = [];
  protected modalLoaded: boolean = false;
  protected actualTable: number;
  protected modalIsVisible: boolean = false;
  constructor(private guestsService: GuestsService, private tableService: TablesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.guestList = this.guestsService.getGuestList();
    this.tableList = this.tableService.getTableList();
  }

  openDialog(table): void {
    this.actualTable;
    const dialogRef = this.dialog.open(TableDialogComponent, {
      width: '80%',
      data: {table: table, guestList: this.guestList}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Guardado de los datos", result);
    });
  }

  createTable() {
    this.tableList.push({name: "Mesa" + (this.tableList.length + 1), guestList: [], maxGuestCount: 20})
  }

 /*  deleteTable(id){
    const index = this.tableList.map((table) => {return table.id}).indexOf(id);
    if (index > -1) {
      const deletedTable = this.tableList.splice(index, 1);
      const firstElement = deletedTable[0];
      firstElement.guestList.forEach((element) => {
        const guestIndex = this.guestList.indexOf(element);
        if (guestIndex > -1) {
          this.guestList[guestIndex].table = null;
        }
      })
    }
  } */

  getGuestNameById(id) {
      const guest = this.guestsService.getGuestById(id);
      return guest.name;
  }

}
