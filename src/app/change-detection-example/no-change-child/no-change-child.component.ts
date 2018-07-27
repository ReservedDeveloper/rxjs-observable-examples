import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChildRecordService } from '../child-record.service';

@Component({
  selector: 'app-no-change-child',
  templateUrl: './no-change-child.component.html',
  styleUrls: ['./no-change-child.component.scss']
})
export class NoChangeChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  id: number;
  record = '';
  inputUpdates: string[] = [];

  constructor(
    private childRecordService: ChildRecordService
  ) { }

  ngOnInit() {
    this.childRecordService.getChildRecord(this.id)
      .subscribe((record: string) => this.record = record );
  }

  ngOnChanges(changes: SimpleChanges) {
    this.inputUpdates.push(`Input changed to ${changes.id.currentValue}`);
  }

  ngOnDestroy() {
    console.log('NoChangeChildComponent destroyed');
  }
}
