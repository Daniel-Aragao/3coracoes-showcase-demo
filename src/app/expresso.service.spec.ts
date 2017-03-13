/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExpressoService } from './expresso.service';

describe('ExpressoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpressoService]
    });
  });

  it('should ...', inject([ExpressoService], (service: ExpressoService) => {
    expect(service).toBeTruthy();
  }));
});
