import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRoboticSurgeryComponent } from './about-robotic-surgery.component';

describe('AboutRoboticSurgeryComponent', () => {
  let component: AboutRoboticSurgeryComponent;
  let fixture: ComponentFixture<AboutRoboticSurgeryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutRoboticSurgeryComponent]
    });
    fixture = TestBed.createComponent(AboutRoboticSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
