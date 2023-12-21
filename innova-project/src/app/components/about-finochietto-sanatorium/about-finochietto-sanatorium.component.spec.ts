import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFinochiettoSanatoriumComponent } from './about-finochietto-sanatorium.component';

describe('AboutFinochiettoSanatoriumComponent', () => {
  let component: AboutFinochiettoSanatoriumComponent;
  let fixture: ComponentFixture<AboutFinochiettoSanatoriumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutFinochiettoSanatoriumComponent]
    });
    fixture = TestBed.createComponent(AboutFinochiettoSanatoriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
