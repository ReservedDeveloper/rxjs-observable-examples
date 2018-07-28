import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LogService } from '@app/log.service';
import { ChildRecordService } from '../../child-record.service';
import { delay, switchMap, tap } from 'rxjs/operators';

/**
 * Child which performs a `switchMap` operation on the id received in the stream to
 * immediately fetch a new record based on the value. This is most useful in read-only
 * scenarios when you have no dependent operations against the record, and can help cut down
 * on pending network requests if you rapid-fire change views.
 */
@Component({
  selector: 'app-switch-map-child',
  templateUrl: './switch-map-child.component.html',
  styleUrls: ['./switch-map-child.component.scss']
})
export class SwitchMapChildComponent implements OnInit, OnDestroy {

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
          this.logService.log(`Change detected for SwitchMapChildComponent. Old value:
          ${this.previousId || 'null'}, New value: ${id}`);
        }),
        switchMap((id: number) => {
          return this.childRecordService.getChildRecord(id)
            .pipe(
              delay(5000),
              tap(() => this.logService.log(`SwitchMapChildComponent record for ${id} received after 5s`))
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
