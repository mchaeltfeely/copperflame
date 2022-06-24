import { TestBed } from '@angular/core/testing';

import { AppConnectService } from './app-connect.service';

describe('AppConnectService', () => {
  let service: AppConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
