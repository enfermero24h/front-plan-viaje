import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanViajeComponent } from './plan-viaje.component';

describe('PlanViajeComponent', () => {
  let component: PlanViajeComponent;
  let fixture: ComponentFixture<PlanViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanViajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
