import { TestBed } from '@angular/core/testing';

import { WheaterHomeService } from './wheater-home.service';

describe('WheaterHomeService', () => {
  let service: WheaterHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheaterHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
