import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TablesService } from 'src/app/core/services/tables.service';
import { GuestsService } from 'src/app/core/services/guests.service';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss']
})
export class TableDialogComponent implements OnInit {

  guestList = [];
  public tableList = [];

  constructor(
    public dialogRef: MatDialogRef<TableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private guestService: GuestsService,
    private tableService: TablesService) { }

  ngOnInit() {
    const tables = this.tableService.tables$.subscribe((tables) => {
      this.tableList = tables
    })
    console.log("que tiene table!?", this.data)
    this.guestService.getGuestByWedding(this.data.table.weddingId).subscribe(guestList => {
      this.guestList = guestList;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setTable(guest) {
    this.guestService.setTable(this.data.table, guest);
    /*if (guest.table) {
      guest.table = null;
      const index = this.data.table.guestList.indexOf(guest.id);
      if (index > -1) {
        this.data.table.guestList.splice(index, 1);
      }
    } else {
      console.log("test");
      this.data.table.guestList.push(guest.id);
      guest.table = this.data.table.id;
    }

    console.log("Hila premo", this.data.table.guestList);*/
  }

  checkUserTableById(id: number) {
    const response = this.data.table.guestList.find((element) => element === id);
    return response !== undefined;
  }

  checkUserInTable(guest) {
    return guest.table && guest.table === this.data.table.id;
  }

  checkUserInOtherTable(guest) {
    return guest.table && guest.table !== this.data.table.id;
  }

  checkTableName(idTable) {
    return idTable ? this.tableList.find(table => table.id === idTable).name : "";
  }

}