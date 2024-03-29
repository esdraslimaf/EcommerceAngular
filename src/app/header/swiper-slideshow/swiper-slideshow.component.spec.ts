import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSlideshowComponent } from './swiper-slideshow.component';

describe('SwiperSlideshowComponent', () => {
  let component: SwiperSlideshowComponent;
  let fixture: ComponentFixture<SwiperSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwiperSlideshowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
