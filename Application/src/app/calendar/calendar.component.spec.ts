import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerOverviewExample } from './calendar.component';

describe('CalendarComponent', () => {
  let component: DatepickerOverviewExample;
  let fixture: ComponentFixture<DatepickerOverviewExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerOverviewExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
