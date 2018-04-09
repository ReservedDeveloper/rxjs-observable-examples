import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private dataStore: string[] = [];
  // the BehaviorSubject that is storing our datas...
  private dataSubject = new BehaviorSubject<string[]>(this.dataStore);
  // the property that is storing our BehaviorSubject as an observable...
  dataObservable = this.dataSubject.asObservable();

  constructor() { }

  /**
   * Adds a record to our datastore, then update the Behavior Subject...
   * @param data string
   */
  addEntry(data: string) {
    this.dataStore.push(data);
    this.dataSubject.next(this.dataStore);
  }
}
