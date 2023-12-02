import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGamesSectionComponent } from './top-games-section.component';

describe('TopGamesSectionComponent', () => {
  let component: TopGamesSectionComponent;
  let fixture: ComponentFixture<TopGamesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopGamesSectionComponent]
    });
    fixture = TestBed.createComponent(TopGamesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
