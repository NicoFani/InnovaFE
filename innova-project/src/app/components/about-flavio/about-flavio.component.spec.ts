import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFlavioComponent } from './about-flavio.component';

describe('AboutFlavioComponent', () => {
  let component: AboutFlavioComponent;
  let fixture: ComponentFixture<AboutFlavioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutFlavioComponent]
    });
    fixture = TestBed.createComponent(AboutFlavioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
