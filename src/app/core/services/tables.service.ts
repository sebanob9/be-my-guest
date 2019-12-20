import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor() { }

  getTableList() {
    return [
      {weddingId:1, id:1, name: "Familia de la novia" , guestList: [3], maxGuestCount: 1, type: "square"},
      {weddingId:1, id:2, name: "Amigos del Cole" , guestList: [], maxGuestCount: 1, type: "square"},
      {weddingId:1, id:3, name: "Familia de él" , guestList: [], maxGuestCount: 1, type: "round"},
      {weddingId:1, id:4, name: "Familia de ella" , guestList: [], maxGuestCount: 1, type: "round"},
      {weddingId:1, id:5, name: "Gente que cae regular" , guestList: [], maxGuestCount: 1, type: "round"},

      {weddingId:2, id:1, name: "Familia de la novia" , guestList: [3], maxGuestCount: 1, type: "square"},
      {weddingId:2, id:2, name: "Amigos del Cole" , guestList: [], maxGuestCount: 1, type: "square"},
      {weddingId:2, id:3, name: "Familia de él" , guestList: [], maxGuestCount: 1, type: "round"},
      {weddingId:2, id:4, name: "Familia de ella" , guestList: [], maxGuestCount: 1, type: "round"},
      {weddingId:2, id:5, name: "Gente que cae regular" , guestList: [], maxGuestCount: 1, type: "round"}
    ];
  }
}
