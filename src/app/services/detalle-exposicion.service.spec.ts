import { TestBed } from '@angular/core/testing';

import { DetalleExposicionService } from './detalle-exposicion.service';

describe('DetalleExposicionService', () => {
  let service: DetalleExposicionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleExposicionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
