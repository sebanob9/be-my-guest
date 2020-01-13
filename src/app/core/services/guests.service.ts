import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService, LOCAL_STORAGE } from 'ngx-webstorage-service';

import { HttpClient } from '@angular/common/http';
import { Guest } from '../models/guest';

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
    private http:HttpClient,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {
    this.selectedGuest=new Guest
    
    this.guests$ = new BehaviorSubject<any[]>(this.guests);
    const savedGuest = this.storage.get('guests');
    if (!savedGuest) {
      this.storage.set('guests', this.guests);
    } else {
      this.guests = savedGuest;
    }
    this.guests$ = new BehaviorSubject<any[]>(this.guests);
  } // -- fin constructor -- 

  getAllGuests() {
    return this.guests$;
  }

  getGuestById(id) {
    const list = this.getAllGuests();
    /* return list.subscribe((guestList) => {
      guestList.filter(guest => guest.id === id);
    } */

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

  cleanTablesFromGuestList(guestList) {
    let list = this.guests;
    guestList.forEach((guest) => {
      const position = list.findIndex(g => g.id === guest.id);
      if (position > -1) {
        list[position].table = null;
      }
    })
    this.setNewGuest(list);
    location.reload();
  }

  setNewGuest(list){
    this.storage.set('guests', list);
  }

  setTable(table, guest) {
    const newGuest = this.guests.find(g => g.id === guest.id);
    const guestIndex = this.guests.findIndex(g => g.id === guest.id);
    if (newGuest.table !== table.id) {
      newGuest.table = table.id;
    } else {
      newGuest.table = null;
    }
    this.guests.splice(guestIndex, 1, newGuest);
    this.storage.set('guests', this.guests);
    this.guests$.next(this.guests);
  /*  const newGuest = this.guests.filter(g => {
      if (g.id === guest.id && guest.table !== table.id) {
        return Object.assign({}, guest, { table: table.id });
      } else {
        return Object.assign({}, guest, { table: null });
      }
      return g;
    });
    this.guests = newArray;
    this.storage.set('guests', this.guests);
    this.guests$.next(this.guests); */
  }


// ---------------- BASE DE DATOS ---------------- // 
selectedGuest: Guest;
guests2: Guest[];
readonly URL_API = 'http://localhost:3000/api/guests';

getGuest() {
  return this.http.get(this.URL_API);
}

postGuest(guest: Guest) {
  return this.http.post(this.URL_API, guest);
}

putGuest(guest: Guest) {
  return this.http.put(this.URL_API + `/${guest._id}`, guest)
  // url + el id que vamos a actualizar, seguido de los datos que metemos
}

deleteGuest(_id:string) {
  return this.http.delete(this.URL_API + `/${_id}`)
}

}