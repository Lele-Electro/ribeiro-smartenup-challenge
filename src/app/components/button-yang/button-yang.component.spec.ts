import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonYangComponent } from './button-yang.component';

describe('ButtonYangComponent', () => {
  let component: ButtonYangComponent;
  let fixture: ComponentFixture<ButtonYangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonYangComponent]
    });
    fixture = TestBed.createComponent(ButtonYangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
