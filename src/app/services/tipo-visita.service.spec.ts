import { TestBed } from '@angular/core/testing';

import { TipoVisitaService } from './tipo-visita.service';

describe('TipoVisitaService', () => {
  let service: TipoVisitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoVisitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
