import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrBernavaComponent } from './dr-bernava.component';

describe('DrBernavaComponent', () => {
  let component: DrBernavaComponent;
  let fixture: ComponentFixture<DrBernavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrBernavaComponent]
    });
    fixture = TestBed.createComponent(DrBernavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
