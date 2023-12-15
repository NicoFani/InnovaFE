import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDaVinciPlataformComponent } from './about-da-vinci-plataform.component';

describe('AboutDaVinciPlataformComponent', () => {
  let component: AboutDaVinciPlataformComponent;
  let fixture: ComponentFixture<AboutDaVinciPlataformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutDaVinciPlataformComponent]
    });
    fixture = TestBed.createComponent(AboutDaVinciPlataformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
