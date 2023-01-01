import { TestBed } from '@angular/core/testing';

import { SellerSignUpService } from './seller-sign-up.service';

describe('SellerSignUpService', () => {
  let service: SellerSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
