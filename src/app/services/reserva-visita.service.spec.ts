import { TestBed } from '@angular/core/testing';

import { ReservaVisitaService } from './reserva-visita.service';

describe('ReservaVisitaService', () => {
  let service: ReservaVisitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaVisitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
