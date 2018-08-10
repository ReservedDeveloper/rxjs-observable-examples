import { TestBed, inject } from '@angular/core/testing';

import { ChildRecordService } from './child-record.service';

describe('ChildRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildRecordService]
    });
  });

  it('should be created', inject([ChildRecordService], (service: ChildRecordService) => {
    expect(service).toBeTruthy();
  }));
});
