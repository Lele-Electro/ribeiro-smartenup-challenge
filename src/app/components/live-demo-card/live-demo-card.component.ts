import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-live-demo-card',
  templateUrl: './live-demo-card.component.html',
  styleUrls: ['./live-demo-card.component.scss']
})
export class LiveDemoCardComponent implements AfterViewInit{
  @Input() cardButton! : string;
  @Input() imageUniqueIdentifier! : string ;
  @Input() featureImageSource! : string;
  @Input() avatarImageSource! : string;
  @Input() themeName! : string;
  @Input() nameOfPerson! : string;
  @Input() nameOfCompany! : string;



  ngAfterViewInit(): void {
  }

  featureImageBuilder(){
    let builtSourceURL = `background-image:url('/assets/images/card-images/${this.featureImageSource}')`
    return builtSourceURL
  }
  avatarImageBuilder(){
    let builtSourceURL = `background-image:url('/assets/images/card-images/${this.avatarImageSource}')`
    return builtSourceURL
  }

  // getimage(){
  //   const image = document.getElementById(this.imageUniqueIdentifier);

  //   if(image){
  //     image.style.backgroundImage = `url('/assets/imaages/card-images/${this.featureImageSource}')`

  //   }
  // }

}
