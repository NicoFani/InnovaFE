import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInnovaComponent } from './about-innova.component';

describe('AboutInnovaComponent', () => {
  let component: AboutInnovaComponent;
  let fixture: ComponentFixture<AboutInnovaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutInnovaComponent]
    });
    fixture = TestBed.createComponent(AboutInnovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
