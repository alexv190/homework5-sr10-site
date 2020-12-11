import { TestBed } from '@angular/core/testing';

import { FormatMapperService } from './format-mapper.service';

describe('FormatMapperService', () => {
  let service: FormatMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
