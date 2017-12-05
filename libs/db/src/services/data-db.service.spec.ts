import { TestBed, inject } from '@angular/core/testing';

import { DataDbService } from './data-db.service';

describe('DataDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataDbService]
    });
  });

  it('should be created', inject([DataDbService], (service: DataDbService) => {
    expect(service).toBeTruthy();
  }));
});
