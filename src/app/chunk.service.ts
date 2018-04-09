import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { database } from './database';

@Injectable()
export class ChunkService {
  private readonly DEFAULT_CHUNK_SIZE = 2;

  private chunkStore: any[] = [];

  private chunkSubject = new BehaviorSubject<any[]>(this.chunkStore);

  chunkObservable: Observable<any[]> = this.chunkSubject.asObservable();

  constructor() { }

  getChunk(i: number) {
    // Simulating an http request to api, and Observing the response to
    // get the chunk from the requests payload...
    const from = i * this.DEFAULT_CHUNK_SIZE;
    const to = (i * this.DEFAULT_CHUNK_SIZE) + this.DEFAULT_CHUNK_SIZE;
    this.chunkStore = this.chunkStore.concat(database.slice(from, to));
    this.chunkSubject.next(this.chunkStore);
  }

  deleteElement(index: number) {
    if (index) {
      this.chunkStore.splice(index, 1);
      this.chunkSubject.next(this.chunkStore);
    }
  }

  updateElement(index: number, updates: any) {
    this.chunkStore[index] = Object.assign({}, this.chunkStore[index], updates);
    this.chunkSubject.next(this.chunkStore);
  }
}
