import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return projects', (done) => {
    service.getProjects().subscribe(projects => {
      expect(projects).toBeDefined();
      expect(projects.length).toBe(2);
      expect(projects[0].title).toBe('Personal Portfolio');
      done;
    });
  });
});
