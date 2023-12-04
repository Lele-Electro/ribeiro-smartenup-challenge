import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDemoCardComponent } from './live-demo-card.component';

describe('LiveDemoCardComponent', () => {
  let component: LiveDemoCardComponent;
  let fixture: ComponentFixture<LiveDemoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveDemoCardComponent]
    });
    fixture = TestBed.createComponent(LiveDemoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
