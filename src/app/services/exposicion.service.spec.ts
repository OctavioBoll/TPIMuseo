import { TestBed } from '@angular/core/testing';

import { ExposicionService } from './exposicion.service';

describe('ExposicionService', () => {
  let service: ExposicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExposicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
