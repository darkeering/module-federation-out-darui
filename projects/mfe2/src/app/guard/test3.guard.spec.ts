import { TestBed } from '@angular/core/testing';

import { Test3Guard } from './test3.guard';

describe('Test3Guard', () => {
  let guard: Test3Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Test3Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
