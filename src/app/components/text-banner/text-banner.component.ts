import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-banner',
  templateUrl: './text-banner.component.html',
  styleUrls: ['./text-banner.component.scss'],
})
export class TextBannerComponent implements AfterViewInit {
  @Input() words!: string[];
  @Input() degrees: number = 0;
  @Input() sizing!: number;
  @Input() uniqueIdentifier!: string;
  // @Input() uniqueIdentifier2!: string;
  @Input() bannerShift: number = 0;
  banner!:HTMLElement | null
  track!:HTMLElement | null

  ngAfterViewInit(){
    this.banner = document.getElementById(this.uniqueIdentifier);
    // this.track= document.getElementById(this.uniqueIdentifier2);
    this.fillUpBanner();
    this.accomodateWords();
    this.shiftBannerUpward();
    this.rotateBanner();
    // this.textSlideAndScroll();
  }

  fillUpBanner() {
    this.words.forEach((word) => {
      this.words = [...this.words, word];
    });
  }



  accomodateWords() {
    if (this.banner) {
      this.banner.style.gridTemplateColumns = `repeat(20, ${this.sizing}px)`;
    }
    // grid-template-columns: repeat(20, 500px);
  }

  rotateBanner() {
    if (this.banner) {
      this.banner.style.transform = `rotate(${this.degrees}deg)`;
    }
  }

  shiftBannerUpward(){
    if(this.banner){
      this.banner.style.transform = `translateY(${this.bannerShift}px)`
    }
  }
  // textSlideAndScroll(){
  //   if(this.track){
  //     this.track.style.transform = `translateX(200px)`
  //   }
  // }
}
