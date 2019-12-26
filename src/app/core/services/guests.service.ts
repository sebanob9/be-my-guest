import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  private guests = [
    { weddingId: 1, id: 1, name: "Pedro", category: "Boream", couple: 2, allergies: null, table: null },
    { weddingId: 1, id: 2, name: "Maria", category: "Boream", couple: 1, allergies: 'Gluten Free', table: null },
    { weddingId: 1, id: 3, name: "Apolonia", category: "Master", couple: null, allergies: null, table: 1 },
    { weddingId: 1, id: 4, name: "Juan", category: "Boream", couple: 5, allergies: null, table: null },
    { weddingId: 1, id: 5, name: "Pareja Juan", category: "Boream", couple: 4, allergies: 'Gluten Free', table: null },
    { weddingId: 1, id: 6, name: "Ines", category: "Master", couple: 7, allergies: null, table: null },
    { weddingId: 1, id: 7, name: "Pareja Ines", category: "Boream", couple: 6, allergies: null, table: null },
    { weddingId: 1, id: 8, name: "Maria C.", category: "Boream", couple: null, allergies: 'Gluten Free', table: null },
    { weddingId: 1, id: 9, name: "Carlos", category: "Rugby", couple: null, allergies: null, table: null },
    { weddingId: 1, id: 10, name: "Carlos", category: "Rugby", couple: null, allergies: null, table: null },
    { weddingId: 1, id: 11, name: "David", category: "Rugby", couple: 12, allergies: null, table: null },
    { weddingId: 1, id: 12, name: "Pareja David", category: "Rugby", couple: 11, allergies: null, table: null },
    { weddingId: 1, id: 13, name: "Santiago", category: "Rugby", couple: 14, allergies: null, table: null },
    { weddingId: 1, id: 14, name: "Pareja Santiago", category: "Rugby", couple: 13, allergies: null, table: null },
    { weddingId: 1, id: 15, name: "Raul", category: "Rugby", couple: null, allergies: null, table: null },

    { weddingId: 2, id: 1, name: "No se tiene que ver", category: "Boream", couple: 2, allergies: null, table: null },
  ];

  guests$: BehaviorSubject<any[]>;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {
    this.guests$ = new BehaviorSubject<any[]>(this.guests);
    const savedGuest = this.storage.get('guests');
    if (!savedGuest) {
      this.storage.set('guests', this.guests);
    } else {
      this.guests = savedGuest;
    }
    this.guests$ = new BehaviorSubject<any[]>(this.guests);
  }

  getAllGuests() {
    return this.guests$;
  }

  getGuestById(id) {
    const list = this.getAllGuests();
    return list;
  }

  getGuestByWedding(weddingId) {
    return this.guests$.pipe(
      map(guests => guests.filter(g => g.weddingId === weddingId))
    );
  }

  getGuestByTable(table) {
    return this.getGuestByWedding(table.weddingId).pipe(
      map(guests => guests.filter(guest => guest.table === table.id))
    );
  }

  setTable(table, guest) {
    const newArray = this.guests.map(g => {
      if (g.id === guest.id) {
        return Object.assign({}, guest, { table: table.id });
      }
      return g;
    });
    this.guests = newArray;
    this.storage.set('guests', this.guests);
    this.guests$.next(this.guests);
  }
}


/* getGuestList() {
  return [
    {weddingId:1, id: 1, name: "Pedro", category: "Boream", couple: 2, allergies: null, table: null},
    {weddingId:1, id: 2, name: "Maria", category: "Boream", couple: 1, allergies: 'Gluten Free', table: null},
    {weddingId:1, id: 3, name: "Apolonia", category: "Master", couple: null, allergies: null, table: 1},
    {weddingId:1, id: 4, name: "Juan", category: "Boream", couple: 5, allergies: null, table: null},
    {weddingId:1, id: 5, name: "Pareja Juan", category: "Boream", couple: 4, allergies: 'Gluten Free', table: null},
    {weddingId:1, id: 6, name: "Ines", category: "Master", couple: 7, allergies: null, table: null},
    {weddingId:1, id: 7, name: "Pareja Ines", category: "Boream", couple: 6, allergies: null, table: null},
    {weddingId:1, id: 8, name: "Maria C.", category: "Boream", couple: null, allergies: 'Gluten Free', table: null},
    {weddingId:1, id: 9, name: "Carlos", category: "Rugby", couple: null, allergies: null, table: null},
    {weddingId:1, id: 10, name: "Carlos", category: "Rugby", couple: null, allergies: null, table: null},
    {weddingId:1, id: 11, name: "David", category: "Rugby", couple: 12, allergies: null, table: null},
    {weddingId:1, id: 12, name: "Pareja David", category: "Rugby", couple: 11, allergies: null, table: null},
    {weddingId:1, id: 13, name: "Santiago", category: "Rugby", couple: 14, allergies: null, table: null},
    {weddingId:1, id: 14, name: "Pareja Santiago", category: "Rugby", couple: 13, allergies: null, table: null},
    {weddingId:1, id: 15, name: "Raul", category: "Rugby", couple: null, allergies: null, table: null},

    {weddingId:2, id: 1, name: "No se tiene que ver", category: "Boream", couple: 2, allergies: null, table: null},

  ];
} */