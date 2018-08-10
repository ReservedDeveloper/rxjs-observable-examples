import { TestBed, inject } from '@angular/core/testing';

import { ChunkService } from './chunk.service';

describe('ChunkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChunkService]
    });
  });

  it('should be created', inject([ChunkService], (service: ChunkService) => {
    expect(service).toBeTruthy();
  }));
});
