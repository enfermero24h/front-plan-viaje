import { TestBed } from '@angular/core/testing';

import { FinPlanService } from './fin-plan.service';

describe('FinPlanService', () => {
  let service: FinPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
