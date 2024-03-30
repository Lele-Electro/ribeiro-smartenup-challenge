import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-yin',
  templateUrl: './button-yin.component.html',
  styleUrls: ['./button-yin.component.scss']
})
export class ButtonYinComponent implements AfterViewInit{

  @Input() buttonTitle!: string;
  @Input() width!: number;
  @Input() uniqueIdentifier!: string;

  ngAfterViewInit(): void {

    this.sizeButtonUp();

  }

  sizeButtonUp(){
    const button = document.getElementById(this.uniqueIdentifier)
    if(button){

      button.style.width = `${this.width ?? 200}px`

    }
  }

}
