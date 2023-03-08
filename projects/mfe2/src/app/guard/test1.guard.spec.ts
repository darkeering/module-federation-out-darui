import { TestBed } from '@angular/core/testing';

import { Test1Guard } from './test1.guard';

describe('Test1Guard', () => {
  let guard: Test1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Test1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
