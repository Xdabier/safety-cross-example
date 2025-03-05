import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomShapeCalendarComponent } from './custom-shape-calendar.component';

describe('SafetyCrossCalendarComponent', () => {
  let component: CustomShapeCalendarComponent;
  let fixture: ComponentFixture<CustomShapeCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomShapeCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomShapeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
