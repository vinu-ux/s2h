import { TestBed } from '@angular/core/testing';

import { TemplateOneService } from './template-one.service';

describe('TemplateOneService', () => {
  let service: TemplateOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
