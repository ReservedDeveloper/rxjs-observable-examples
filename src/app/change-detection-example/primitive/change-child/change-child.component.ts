import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChildRecordService } from '../../child-record.service';
import { LogService } from '@app/log.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-change-child',
  templateUrl: './change-child.component.html',
  styleUrls: ['./change-child.component.scss']
})
export class ChangeChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  id: number;

  record = '';
  private recordSubscription: Subscription;

  constructor(
    private logService: LogService,
    private childRecordService: ChildRecordService
  ) { }

  ngOnInit() {
    this.setupRecordSubscription(this.id);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.logService.log(
      `Change detected for ChangeChildComponent. Old value:
      ${changes.id.previousValue}, New value: ${changes.id.currentValue}`
    );
    if (this.recordSubscription) {
      this.recordSubscription.unsubscribe();
    }

    this.setupRecordSubscription(changes.id.currentValue);
  }

  setupRecordSubscription(id: number) {
    this.recordSubscription = this.childRecordService.getChildRecord(id)
      .subscribe((record: string) => this.record = record );
  }

  ngOnDestroy(): void {
    this.logService.log('ChangeChildComponent destroyed');
    if (this.recordSubscription) {
      this.recordSubscription.unsubscribe();
    }
  }
}
