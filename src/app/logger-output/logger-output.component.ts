import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-logger-output',
  templateUrl: './logger-output.component.html',
  styleUrls: ['./logger-output.component.scss']
})
export class LoggerOutputComponent implements OnInit, OnDestroy {
  @Input()
  messagesStream: Observable<string>;

  private destroyStream: Subject<boolean> = new Subject<boolean>();
  messages: string[] = [];

  constructor() { }

  ngOnInit() {
    this.messagesStream
      .pipe(
        takeUntil(this.destroyStream)
      )
      .subscribe((message: string) => this.messages.push(message));
  }

  ngOnDestroy() {
    this.destroyStream.next(true);
    this.destroyStream.complete();
  }

  clearLogs() {
    this.messages = [];
  }
}
