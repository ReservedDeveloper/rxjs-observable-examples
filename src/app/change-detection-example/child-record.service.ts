import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable()
export class ChildRecordService {

  constructor() { }

  getChildRecord(id: number): Observable<string> {
    return of(`Child record ${id != null && id.toString() || 'none'}`);
  }
}
