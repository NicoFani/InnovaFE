import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalProceduresComponent } from './surgical-procedures.component';

describe('SurgicalProceduresComponent', () => {
  let component: SurgicalProceduresComponent;
  let fixture: ComponentFixture<SurgicalProceduresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurgicalProceduresComponent]
    });
    fixture = TestBed.createComponent(SurgicalProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
