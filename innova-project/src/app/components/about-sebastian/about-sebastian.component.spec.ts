import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSebastianComponent } from './about-sebastian.component';

describe('AboutSebastianComponent', () => {
  let component: AboutSebastianComponent;
  let fixture: ComponentFixture<AboutSebastianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSebastianComponent]
    });
    fixture = TestBed.createComponent(AboutSebastianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
