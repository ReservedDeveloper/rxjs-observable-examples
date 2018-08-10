import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  logMessagesStream: Observable<string>;

  constructor(
    private logService: LogService
  ) {
  }

  ngOnInit() {
    this.logMessagesStream = this.logService.messageStream;
  }
}
