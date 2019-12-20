import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  constructor() { }

  getGuestList() {
    return [
      {weddingId:1, id: 1, name: "Pedro", category: "Boream", couple: 2, allergies: null, table: null},
      {weddingId:1, id: 2, name: "Maria", category: "Boream", couple: 1, allergies: 'Gluten Free', table: null},
      {weddingId:1, id: 3, name: "Apolonia", category: "Master", couple: null, allergies: null, table: 1},
      {weddingId:1, id: 4, name: "Pedro", category: "Boream", couple: 2, allergies: null, table: null},
      {weddingId:1, id: 5, name: "Maria", category: "Boream", couple: 1, allergies: 'Gluten Free', table: null},
      {weddingId:1, id: 6, name: "Apolonia", category: "Master", couple: null, allergies: null, table: 1},
      {weddingId:1, id: 7, name: "Pedro", category: "Boream", couple: 2, allergies: null, table: null},
      {weddingId:1, id: 8, name: "Maria", category: "Boream", couple: 1, allergies: 'Gluten Free', table: null},
      {weddingId:1, id: 9, name: "Apolonia", category: "Master", couple: null, allergies: null, table: 1},

      {weddingId:2, id: 1, name: "Pedro", category: "Boream", couple: 2, allergies: null, table: null},
      {weddingId:2, id: 2, name: "Maria", category: "Boream", couple: 1, allergies: 'Gluten Free', table: null},
      {weddingId:2, id: 3, name: "Apolonia", category: "Master", couple: null, allergies: null, table: 1},
      {weddingId:2, id: 4, name: "Pedro", category: "Boream", couple: 2, allergies: null, table: null},
      {weddingId:2, id: 5, name: "Maria", category: "Boream", couple: 1, allergies: 'Gluten Free', table: null},
      {weddingId:2, id: 6, name: "Apolonia", category: "Master", couple: null, allergies: null, table: 1},
      {weddingId:2, id: 7, name: "Pedro", category: "Boream", couple: 2, allergies: null, table: null},
      {weddingId:2, id: 8, name: "Maria", category: "Boream", couple: 1, allergies: 'Gluten Free', table: null},
      {weddingId:2, id: 9, name: "Apolonia", category: "Master", couple: null, allergies: null, table: 1}
    ];
  }

  getGuestById(id) {
    const list = this.getGuestList();
    return list.find((guest)=> guest.id === id);
  }
}
