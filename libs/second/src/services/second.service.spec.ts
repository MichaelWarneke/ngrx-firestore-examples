import { TestBed, inject } from '@angular/core/testing';

import { SecondService } from './second.service';

describe('SecondService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondService]
    });
  });

  it('should be created', inject([SecondService], (service: SecondService) => {
    expect(service).toBeTruthy();
  }));
});
