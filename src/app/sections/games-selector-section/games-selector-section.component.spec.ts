import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesSelectorSectionComponent } from './games-selector-section.component';

describe('GamesSelectorSectionComponent', () => {
  let component: GamesSelectorSectionComponent;
  let fixture: ComponentFixture<GamesSelectorSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesSelectorSectionComponent]
    });
    fixture = TestBed.createComponent(GamesSelectorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
