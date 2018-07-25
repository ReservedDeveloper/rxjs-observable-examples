import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  logMessages: Observable<string[]>;

  constructor(
    private logService: LogService
  ) {
  }

  ngOnInit() {
    this.logMessages = this.logService.messagesStream;
  }

  clearLogs() {
    this.logService.clearLogs();
  }
}
