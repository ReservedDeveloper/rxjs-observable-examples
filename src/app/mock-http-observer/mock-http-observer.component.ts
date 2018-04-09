import { Component, OnInit } from '@angular/core';
import { ChunkService } from '../chunk.service';

@Component({
  selector: 'app-mock-http-observer',
  templateUrl: './mock-http-observer.component.html',
  styleUrls: ['./mock-http-observer.component.css']
})
export class MockHttpObserverComponent implements OnInit {
  currentChunk: number;
  chunks: any[];

  constructor(private chunkService: ChunkService) { }

  ngOnInit() {
    this.chunkService.chunkObservable.subscribe( c => this.chunks = c);
    this.currentChunk = 0;
    this.chunkService.getChunk(0);
  }

  getNextChunk() {
    this.currentChunk = this.currentChunk + 1;
    this.chunkService.getChunk(this.currentChunk);
  }
}
