import { TestBed } from '@angular/core/testing';

import { GestionarTokenService } from './gestionar-token.service';

describe('GestionarTokenService', () => {
  let service: GestionarTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
