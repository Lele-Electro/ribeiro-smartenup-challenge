import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent  implements OnInit, AfterViewInit{



  centerOfPage = 0
  ngOnInit(): void {

    this.centerOfPage = window.innerWidth / 2;


  }

 ngAfterViewInit(): void {

 }


  initializeSlideShowElements(){
    // Reference Elements in Dom -  Place in variables
  //   const imageOne = document.querySelector('.image-1');
  //   const imageOneById = document.getElementById('imageOneByID');
  //   console.log(imageOne);

  //   console.log(window.innerWidth);
  //   if(imageOneById){
  //     imageOneById.style.transform=`translateX(${window.innerWidth / 2}px)`;
  //     imageOneById.style.transition=" all 2s"
  //   }

  const track = document.querySelector('.carousel__track');
    if(track){
      const slides = Array.from(track?.children)
    }

  }
}
