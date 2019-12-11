import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public imageList: any;
  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.imagesService.getImages().subscribe((data) => {
      this.imageList = data;
      console.log(data);
    });
  }

  editImage(event) {
    console.log(event.target.value);
  }

}
