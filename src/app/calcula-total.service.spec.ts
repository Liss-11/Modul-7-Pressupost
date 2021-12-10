import { TestBed } from '@angular/core/testing';

import { CalculaTotalService } from './calcula-total.service';

describe('CalculaTotalService', () => {
  let service: CalculaTotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculaTotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
