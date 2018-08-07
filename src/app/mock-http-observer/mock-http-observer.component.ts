import { Component, OnInit } from '@angular/core';
import { ChunkService } from '../chunk.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mock-http-observer',
  templateUrl: './mock-http-observer.component.html',
  styleUrls: ['./mock-http-observer.component.scss']
})
export class MockHttpObserverComponent implements OnInit {
  chunks: Observable<any[]>;

  constructor(private chunkService: ChunkService) { }

  ngOnInit() {
    this.chunks = this.chunkService.chunkObservable;
    this.getNextChunk(0);
  }

  getNextChunk(offset: number) {
    this.chunkService.getChunks(offset);
  }
}
