import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonYinComponent } from './button-yin.component';

describe('ButtonYinComponent', () => {
  let component: ButtonYinComponent;
  let fixture: ComponentFixture<ButtonYinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonYinComponent]
    });
    fixture = TestBed.createComponent(ButtonYinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
