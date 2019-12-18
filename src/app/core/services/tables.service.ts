import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor() { }

  getTableList() {
    return [
      {id:1, name: "Familia de la novia" , guestList: [3], maxGuestCount: 1, type: "square"},
      {id:2, name: "Amigos del Cole" , guestList: [], maxGuestCount: 1, type: "square"},
      {id:3, name: "Compis de Boream" , guestList: [], maxGuestCount: 1, type: "round"}
    ];
  }
}
