import { TestBed } from '@angular/core/testing';

import { ColorListService } from './color-list.service';

describe('ColorListService', () => {
  let service: ColorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
