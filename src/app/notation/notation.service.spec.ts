import { TestBed, inject } from '@angular/core/testing';

import { NotationService } from './notation.service';

describe('NotationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotationService]
    });
  });

  it('should be created', inject([NotationService], (service: NotationService) => {
    expect(service).toBeTruthy();
  }));
});
