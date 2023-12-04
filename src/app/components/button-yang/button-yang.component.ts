import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-yang',
  templateUrl: './button-yang.component.html',
  styleUrls: ['./button-yang.component.scss']
})
export class ButtonYangComponent implements AfterViewInit{

  @Input() buttonTitle!: string;
  @Input() width!: number;
  @Input() uniqueIdentifier!: string;

  ngAfterViewInit(): void {

    this.sizeButtonUp();

  }

  sizeButtonUp(){
    const button = document.getElementById(this.uniqueIdentifier);
    if(button){

      button.style.width = `${this.width ?? 200}px`

    }
  }

}
