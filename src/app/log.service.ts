import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LogService {

  private messages: string[] = [];
  private messagesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  messagesStream: Observable<string[]> = this.messagesSubject.asObservable();

  constructor() { }

  log(message: string) {
    this.messages.push(message);
    this.messagesSubject.next(this.messages);
  }

  clearLogs() {
    this.messages = [];
    this.messagesSubject.next(this.messages);
  }
}
