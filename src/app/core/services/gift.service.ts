import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gift } from '../models/gift';


@Injectable({
  providedIn: 'root'
})
export class GiftService {

  readonly URL_API = 'http://localhost:3000/api/gifts';

  selectedGift: Gift;

  gifts: Gift[];

  constructor(private http: HttpClient) { 
    this.selectedGift = new Gift();
  }

  getGifts() {
    return this.http.get(this.URL_API);
  }

  postGift(gift: Gift) {
    return this.http.post(this.URL_API, gift);
  }
  
  putGift(gift: Gift) {
    return this.http.put(this.URL_API + `/${gift._id}`, gift);
  }
  
  deleteGift(_id:string) {
    return this.http.delete(this.URL_API + `/${_id}`)
  }
}
