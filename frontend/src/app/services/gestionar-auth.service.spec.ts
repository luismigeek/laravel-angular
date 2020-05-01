import { TestBed } from '@angular/core/testing';

import { GestionarAuthService } from './gestionar-auth.service';

describe('GestionarAuthService', () => {
  let service: GestionarAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
