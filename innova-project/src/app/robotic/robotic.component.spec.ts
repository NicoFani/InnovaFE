import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticComponent } from './robotic.component';

describe('RoboticComponent', () => {
  let component: RoboticComponent;
  let fixture: ComponentFixture<RoboticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoboticComponent]
    });
    fixture = TestBed.createComponent(RoboticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
