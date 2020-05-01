import { TestBed } from '@angular/core/testing';

import { GestionarLoginService } from './gestionar-login.service';

describe('GestionarLoginService', () => {
  let service: GestionarLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
