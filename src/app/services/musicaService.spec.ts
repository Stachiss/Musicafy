import { TestBed } from '@angular/core/testing';

import { MusicaService } from './musicaService';

describe('MusicaServiceService', () => {
  let service: MusicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
