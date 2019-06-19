import { TestBed } from '@angular/core/testing';

import { ExperienceproService } from './experiencepro.service';

describe('ExperienceproService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExperienceproService = TestBed.get(ExperienceproService);
    expect(service).toBeTruthy();
  });
});
