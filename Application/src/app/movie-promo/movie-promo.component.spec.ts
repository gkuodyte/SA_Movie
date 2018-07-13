import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePromoComponent } from './movie-promo.component';

describe('MoviePromoComponent', () => {
  let component: MoviePromoComponent;
  let fixture: ComponentFixture<MoviePromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
