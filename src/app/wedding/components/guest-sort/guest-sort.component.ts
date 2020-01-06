import { Component, OnInit } from '@angular/core';
import { GuestsService } from 'src/app/core/services/guests.service';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { TableDialogComponent } from '../table-dialog/table-dialog.component';
import { TablesService } from 'src/app/core/services/tables.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-guest-sort',
  templateUrl: './guest-sort.component.html',
  styleUrls: ['./guest-sort.component.scss']
})
export class GuestSortComponent implements OnInit {
  tableList$: Observable<any>;
  model = {
    tableName: '',
    guestNumber: 0
  };
  guestList$: Observable<any>;

  public tableList: object[] = [];
  public guestList: object[] = [];
  public modalLoaded: boolean = false;
  public actualTable: number;
  public modalIsVisible: boolean = false;
  constructor(public guestsService: GuestsService, private tableService: TablesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.guestList$ = this.guestsService.getAllGuests();
    this.tableList$ = this.tableService.getAll();
  }

  openDialog(table): void {
    const dialogRef = this.dialog.open(TableDialogComponent, {
      width: '80%',
      data: { table }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Guardado de los datos", result);
    });

  }

  createTable() {
    this.tableService.addTable({
      name: this.model.tableName,
      guestList: [],
      maxGuestCount: this.model.guestNumber
    });
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
   }  */

  getGuestNameById(id) {
    const guest = this.guestsService.getGuestById(id);
    /* return guest.name; */
  }

}
