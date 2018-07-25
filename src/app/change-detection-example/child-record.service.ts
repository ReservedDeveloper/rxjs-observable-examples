import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChildRecordService {

  constructor() { }

  getChildRecord(id: number): Observable<string> {
    return of(`Child record ${id || 'none'}`);
  }
}
