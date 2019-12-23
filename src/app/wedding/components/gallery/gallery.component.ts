import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  categoryList: object[] = [];


  constructor(private categoriesservice: CategoriesService) { }

  ngOnInit() {
    this.categoryList = this.categoriesservice.getCategoryList();
  }

}
