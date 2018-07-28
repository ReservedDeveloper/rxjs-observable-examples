import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataService {
  // Property that models the data we are observing...
  private dataStore: string[] = [];
  // BehaviorSubject that is storing our datas...
  private dataSubject = new BehaviorSubject<string[]>(this.dataStore);
  // Observable that is storing our BehaviorSubject as an Observable...
  dataObservable: Observable<string[]> = this.dataSubject.asObservable();

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
