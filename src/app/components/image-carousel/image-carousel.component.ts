import { AfterViewInit, Component, OnInit } from '@angular/core';
import { imageCarouselModel } from '../models/image-carousel-model';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarouselComponent implements OnInit, AfterViewInit {
  centerOfPage = 0;
  appliedLeftOnContainer: number = 0;
  danglingMode = true;
  imagesByRelativePath :imageCarouselModel[] =  [
    {
      source: '/assets/images/carousel-images/slide (2).png',
      expand: false
    },
    {
      source: '/assets/images/carousel-images/slide (1).png',
      expand: false
    },
    {
      source: '/assets/images/carousel-images/slide (3).png',
      expand: false
    }

  ]

  ngOnInit(): void {
    this.centerOfPage = window.innerWidth / 2;
  }

  // focusOnImage(index){

  // }

  expandSlide(index: number){
    this.imagesByRelativePath[index].expand = true;
    this.danglingMode = false;
  }
  collapseSlide(index: number){
    this.imagesByRelativePath[index].expand = false;
    this.danglingMode = true;
  }


  ngAfterViewInit(): void {

      // this.initializeSlideShowElements2();

  }



  // initializeSlideShowElements() {
  //   const track = document.querySelector('.carousel__track');
  //   if (track) {
  // //Define HTML Elements
  //     const slides = Array.from(track?.children);
  //     const slidesWidth = slides[0].getBoundingClientRect().width;

  // //Position HTML Elements
  //     const setSlidePosition = (slide: any, index:  o px number) => {
  //       slide.style.left = slidesWidth * index + 'px';
  //       slide.style.marginRight = '50px';
  //       console.log(slide.getBoundingClientRect().width);
  //     };
  //     slides.forEach(setSlidePosition);

  //   }
  // }

  initializeSlideShowElements() {
    const track = document.querySelector('.carousel__track');
    if (track) {
      const slides = Array.from(track?.children);
      const slideOne = document.querySelector('.slide-1')

      console.log(' CHILDREN IN ARRAY')
      console.log(slides[0])

      track.appendChild(slides[0]);
      track.appendChild(slides[0]);
      track.appendChild(slides[0]);
      track.appendChild(slides[0]);
      track.appendChild(slides[0]);
      track.appendChild(slides[0]);
      track.appendChild(slides[0]);

      const e = document.getElementById('track')
      if(e){
       e.style.gridTemplateColumns = `repeat(${slides.length}, 320px)`;
       e.style.columnGap = `20px`;



       setInterval(() => {

        // Declareapplicable constants to moving the Slide
        const slideMoveCount = slides.length - 2;
        const slideWidth= 320;
        const slideMargin = 20;
        const leftPropertyOnTrack = Math.round(e.getBoundingClientRect().left);

        if(this.appliedLeftOnContainer <= slideMoveCount ){
        // MOVE SLIDE LEFT
          e.style.transform= `translate(${leftPropertyOnTrack - (slideWidth + slideMargin)}px, 0)`;
                  console.log('%c VALUES', 'background: black; color: orange; padding: 10px; width: 3000px');
                  console.log(`${this.appliedLeftOnContainer} VS ${slideMoveCount}`)

        }

        if(this.appliedLeftOnContainer > slideMoveCount ){
              // MOVE SLIDE LEFT
          // alert('Perhaps TIME TO MOVE IN THE Opposite direction')
          e.style.transform= `translate(${leftPropertyOnTrack + (slideWidth + slideMargin)}px, 0)`;
        }

        this.appliedLeftOnContainer++




       }, 2000);


      }



    }

  }

  initializeSlideShowElements2() {
    const track = document.querySelector('.carousel__track');
    if (track) {
      const slides = Array.from(track?.children);
      const slideOne = document.querySelector('.slide-1');
      const clone = slideOne?.cloneNode(true)

    //  if(clone){
    //   // APPEND CHILD TO SLIDE ARRAY
    //   track.appendChild(clone)
    //  }
      console.log(' CHILDREN IN ARRAY')
      console.log(slides[0])

      const e = document.getElementById('track')
      if(e){
       e.style.gridTemplateColumns = `repeat(${slides.length}, 320px)`;
       e.style.columnGap = `20px`;


      }



    }

  }
}
