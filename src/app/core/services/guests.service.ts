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
    { weddingId: 1, id: 1, name: "Pedro", category: "Boream", allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 2, name: "Maria", category: "Boream", allergies: 'Queso', table: null },
    { weddingId: 1, id: 3, name: "Apolonia", category: "Master", allergies: "Sin alergias", table: 1 },
    { weddingId: 1, id: 4, name: "Juan", category: "Boream", allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 5, name: "David", category: "Boream", allergies: 'Queso' , table: null },
    { weddingId: 1, id: 6, name: "Ines", category: "Master", allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 7, name: "Maria", category: "Boream", allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 8, name: "Marina", category: "Boream", allergies: 'Marisco', table: null },
    { weddingId: 1, id: 9, name: "Carlos", category: "Fútbol", allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 10, name: "Luis", category: "Fútbol", allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 11, name: "David", category: "Fútbol",  allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 12, name: "Rayul", category: "Fútbol",  allergies: "Marisco", table: null },
    { weddingId: 1, id: 13, name: "Santiago", category: "Escuela",  allergies: "Marisco", table: null },
    { weddingId: 1, id: 14, name: "Sergio", category: "Fútbol",  allergies: "Marisco", table: null },
    { weddingId: 1, id: 15, name: "Javier", category: "Fútbol", allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 16, name: "Redu", category: "Fútbol", allergies: "Pescado", table: null },
    { weddingId: 1, id: 17, name: "Carlos", category: "Escuela", allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 18, name: "Ana", category: "Escuela",  allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 19, name: "Miguel", category: "Escuela",  allergies: "Pescado", table: null },
    { weddingId: 1, id: 20, name: "Almudena", category: "Escuela",  allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 21, name: "Iria", category: "GYM",  allergies: "Sin alergias", table: null },
    { weddingId: 1, id: 22, name: "Fausto", category: "GYM", allergies: "Sin alergias", table: null },
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