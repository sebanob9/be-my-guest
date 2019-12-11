import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagsService {  
  private resource = 'tags';

  constructor() { }

  public getTags() {

    return [];
  }

  public getTagById(id: number){

    return {};
  }
  
  public postTag(tag: object) {

    return '';
  }

  public deleteTag(id: number) {

    return '';
  }

  public updateTagsById(id: number, newTag: object) {

    return '';
  }
}
