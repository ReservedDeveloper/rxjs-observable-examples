import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChildRecordService } from '../../child-record.service';
import { LogService } from '@app/log.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-no-change-child',
  templateUrl: './no-change-child.component.html',
  styleUrls: ['./no-change-child.component.scss']
})
export class NoChangeChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  id: number;
  record = '';

  private recordSubscription: Subscription;

  constructor(
    private childRecordService: ChildRecordService,
    private logService: LogService
  ) { }

  ngOnInit() {
    this.recordSubscription = this.childRecordService.getChildRecord(this.id)
      .subscribe((record: string) => this.record = record );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.logService.log(
      `Input changed for NoChangeChildComponent. Old value:
      ${changes.id.previousValue}, New value: ${changes.id.currentValue}`
    );
  }

  ngOnDestroy() {
    this.logService.log('NoChangeChildComponent destroyed');
    if (this.recordSubscription) {
      this.recordSubscription.unsubscribe();
    }
  }
}
