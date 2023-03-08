import { TestBed } from '@angular/core/testing';

import { Test2Guard } from './test2.guard';

describe('Test2Guard', () => {
  let guard: Test2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Test2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
