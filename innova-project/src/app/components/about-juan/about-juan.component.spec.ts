import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJuanComponent } from './about-juan.component';

describe('AboutJuanComponent', () => {
  let component: AboutJuanComponent;
  let fixture: ComponentFixture<AboutJuanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutJuanComponent]
    });
    fixture = TestBed.createComponent(AboutJuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
