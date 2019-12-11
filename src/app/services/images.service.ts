import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private resource = 'images';

  constructor(private http: HttpClient) {}

  public getImages() {
    return this.http.get(`${environment.apiUrl}/${this.resource}`);
  }

  public getImageById(id: string){
    return this.http.get(`${environment.apiUrl}/${this.resource}/${id}`);
  }

  public getImagesByTag(tag: string) {
    let imageList = this.http.get(`${environment.apiUrl}/${this.resource}`);
    return [];
  }

  public postImage(image: object) {
    return this.http.post(`${environment.apiUrl}/${this.resource}`, image);
  }

  public deleteImage(id: string) {
    return this.http.delete(`${environment.apiUrl}/${this.resource}/${id}`);
  }

  public updateImageById(id: string, newImage: object) {
    return this.http.put(`${environment.apiUrl}/${this.resource}`, newImage);
  }
}
