import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrAnsaldiComponent } from './dr-ansaldi.component';

describe('DrAnsaldiComponent', () => {
  let component: DrAnsaldiComponent;
  let fixture: ComponentFixture<DrAnsaldiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrAnsaldiComponent]
    });
    fixture = TestBed.createComponent(DrAnsaldiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
