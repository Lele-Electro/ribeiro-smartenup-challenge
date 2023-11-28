import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent  implements OnInit{

  centerOfPage = 0
  ngOnInit(): void {

    this.centerOfPage = window.innerWidth / 2;


  }

}
