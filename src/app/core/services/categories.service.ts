import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategoryList() {
    return [
      {weddingId:1, id: 1, category: "Familia él"},
      {weddingId:1, id: 1, category: "Familia ella"},
      {weddingId:1, id: 1, category: "GYM"},
      {weddingId:1, id: 1, category: "Universidad"},
      {weddingId:1, id: 1, category: "Boream"},
      {weddingId:1, id: 1, category: "Colegio"},
      {weddingId:1, id: 1, category: "Pueblo"}
    ];
  }
}
