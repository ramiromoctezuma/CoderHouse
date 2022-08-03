import { TestBed } from '@angular/core/testing';

import { CoursesAlumnsService } from './courses-alumns.service';

describe('CoursesAlumnsService', () => {
  let service: CoursesAlumnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesAlumnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
