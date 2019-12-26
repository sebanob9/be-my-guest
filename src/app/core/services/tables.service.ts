import { Injectable, Inject } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
import { SESSION_STORAGE, StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class TablesService {

  private tables = [
    { id: 1, weddingId: 1, name: "Familia de la novia", guestList: [3], maxGuestCount: 1, type: "square" },
    { id: 2, weddingId: 1, name: "Amigos del Cole", guestList: [], maxGuestCount: 1, type: "square" },
    { id: 3, weddingId: 1, name: "Familia de él", guestList: [], maxGuestCount: 1, type: "round" },
    { id: 4, weddingId: 1, name: "Familia de ella", guestList: [], maxGuestCount: 1, type: "round" },
    { id: 5, weddingId: 1, name: "Gente que cae regular", guestList: [], maxGuestCount: 1, type: "round" },
    { weddingId: 2, id: 1, name: "Familia de la novia", guestList: [3], maxGuestCount: 1, type: "square" }
  ];

  tables$ = new BehaviorSubject<any[]>(this.tables);

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) { }

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

  remove(id) {
    const found = this.tables.findIndex(t => t.id === id);
    if (found > -1) {
      this.tables.splice(found, 1);
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
