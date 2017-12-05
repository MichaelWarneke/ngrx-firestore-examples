import { TestBed, inject } from '@angular/core/testing';

import { AuthDbService } from './auth-db.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDbService]
    });
  });

  it('should be created', inject([AuthDbService], (service: AuthDbService) => {
    expect(service).toBeTruthy();
  }));
});
