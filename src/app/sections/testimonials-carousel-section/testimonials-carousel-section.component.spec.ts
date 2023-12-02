import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsCarouselSectionComponent } from './testimonials-carousel-section.component';

describe('TestimonialsCarouselSectionComponent', () => {
  let component: TestimonialsCarouselSectionComponent;
  let fixture: ComponentFixture<TestimonialsCarouselSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsCarouselSectionComponent]
    });
    fixture = TestBed.createComponent(TestimonialsCarouselSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
