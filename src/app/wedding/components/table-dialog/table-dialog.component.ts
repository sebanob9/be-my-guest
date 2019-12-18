import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TablesService } from 'src/app/core/services/tables.service';

@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss']
})
export class TableDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TableDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setTable(guest) {
    if (guest.table) {
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
    
    console.log("Hila premo", this.data.table.guestList);
  }
  
  checkUserTableById(id: number) {
    const response = this.data.table.guestList.find((element) => element === id);
    return response !== undefined;
  }

}
