import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByidComponent } from './employee-byid.component';

describe('EmployeeByidComponent', () => {
  let component: EmployeeByidComponent;
  let fixture: ComponentFixture<EmployeeByidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeByidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
