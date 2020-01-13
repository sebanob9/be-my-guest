import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';
import { GuestsService } from './guests.service';


@Injectable({
  providedIn: 'root'
})
export class TablesService {

  public tables = [
    { id: 1, weddingId: 1, name: "Familia de la novia", guestList: [3], maxGuestCount: 10, type: "square" },
    { id: 2, weddingId: 1, name: "Amigos del Cole", guestList: [1], maxGuestCount: 12, type: "square" },
    { id: 3, weddingId: 1, name: "Familia de él", guestList: [], maxGuestCount: 8, type: "round" },
    { id: 5, weddingId: 1, name: "Gente que cae regular", guestList: [], maxGuestCount: 10, type: "round" },
  ];

  tables$: BehaviorSubject<any[]>;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService,
    private guestService: GuestsService
  ) {
    const savedTables = this.storage.get('tables');
    if (!savedTables) {
      this.storage.set('tables', this.tables);
    } else {
      this.tables = savedTables;
    }
    this.tables$ = new BehaviorSubject<any[]>(this.tables);
  }

  getAll() {
    return this.tables$;
  }

  addTable(table) {
    this.tables.push(table);
    this.storage.set('tables', this.tables);
    this.tables$.next(this.tables);
  }

  editTable(id, table) {
    const found = this.tables.findIndex(t => t.id === id);
    if (found > -1) {
      this.tables[found] = table;
    }
    this.storage.set('tables', this.tables);
    this.tables$.next(this.tables);
  }

  remove(object) {
    const found = this.tables.findIndex(table => table.id === object.id);
    if (found > -1) {
      
      this.guestService.guests$.subscribe((guests) => {
        const guestList = guests.filter((g => g.table === this.tables[found].id))
        this.guestService.cleanTablesFromGuestList(guestList);
        this.tables.splice(found, 1);
      });
    }
    this.storage.set('tables', this.tables);
    this.tables$.next(this.tables);
  }

  /*
  getTableList() {
    return [
      { weddingId: 1, id: 1, name: "Familia de la novia", guestList: [3], maxGuestCount: 1, type: "square" },
      { weddingId: 1, id: 2, name: "Amigos del Cole", guestList: [], maxGuestCount: 1, type: "square" },
      { weddingId: 1, id: 3, name: "Familia de él", guestList: [], maxGuestCount: 1, type: "round" },
      { weddingId: 1, id: 4, name: "Familia de ella", guestList: [], maxGuestCount: 1, type: "round" },
      { weddingId: 1, id: 5, name: "Gente que cae regular", guestList: [], maxGuestCount: 1, type: "round" },

      { weddingId: 2, id: 1, name: "Familia de la novia", guestList: [3], maxGuestCount: 1, type: "square" },
      { weddingId: 2, id: 2, name: "Amigos del Cole", guestList: [], maxGuestCount: 1, type: "square" },
      { weddingId: 2, id: 3, name: "Familia de él", guestList: [], maxGuestCount: 1, type: "round" },
      { weddingId: 2, id: 4, name: "Familia de ella", guestList: [], maxGuestCount: 1, type: "round" },
      { weddingId: 2, id: 5, name: "Gente que cae regular", guestList: [], maxGuestCount: 1, type: "round" }
    ];
  }*/
}
