import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeddingsService {

  constructor() { }

  getWeddingList() {
    return [
      {id:1, name: "Cupido & apolonia",eventType: "Boy&Girl", place:"Finca Prados Moros", date:"25 abr 2020",phone:"666555222",email:"",password:""},
      {id:2, name: "Amigos del Cole", eventType: "Girl&Girl", place:"Finca 4 Vientos", date:"30 sep 2020",phone:"654987123",email:"",password:""}
  
    ];
  }
}
