import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LogService } from '../../log.service';
import { ChildRecordService } from '../child-record.service';
import { delay, mergeMap, tap } from 'rxjs/operators';

/**
 * Child which performs a `mergeMap` operation on the id received in the stream to
 * fetch a new record based on the value after any existing fetches have completed.
 * This is most useful in scenarios when you have dependent operations against
 * the record, to ensure you do not have any dependent operations lost with the network switch
 */
@Component({
  selector: 'app-stream-input-merge-map-child',
  templateUrl: './stream-input-merge-map-child.component.html',
  styleUrls: ['./stream-input-merge-map-child.component.scss']
})
export class StreamInputMergeMapChildComponent implements OnInit, OnDestroy {

  @Input()
  idStream: Observable<number>;

  previousId: number;
  record = '';
  private recordSubscription: Subscription;

  constructor(
    private logService: LogService,
    private childRecordService: ChildRecordService
  ) {
  }

  ngOnInit() {
    this.recordSubscription = this.idStream
      .pipe(
        tap((id: number) => {
          this.logService.log(`Change detected for StreamInputMergeMapChildComponent. Old value:
          ${this.previousId || 'null'}, New value: ${id}`);
        }),
        mergeMap((id: number) => {
          return this.childRecordService.getChildRecord(id)
            .pipe(
              delay(5000),
              tap(() => this.logService.log(`StreamInputMergeMapChildComponent record for ${id} received after 5s`))
            );
        }),
      )
      .subscribe((record: string) => this.record = record);

  }

  ngOnDestroy(): void {
    if (this.recordSubscription) {
      this.recordSubscription.unsubscribe();
    }
  }
}
