import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LogService {

  private messageSubject: Subject<string> = new Subject<string>();
  messageStream: Observable<string> = this.messageSubject.asObservable();

  constructor() {
  }

  log(message: string) {
    this.messageSubject.next(message);
  }
}
