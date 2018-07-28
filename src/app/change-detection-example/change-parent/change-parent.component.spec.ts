import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeParentComponent } from './change-parent.component';
import { NoChangeChildComponent } from '../primitive/no-change-child/no-change-child.component';
import { ChangeChildComponent } from '../primitive/change-child/change-child.component';
import { SubjectBackedChildComponent } from '../primitive/subject-backed-child/subject-backed-child.component';
import { SwitchMapChildComponent } from '../stream/switch-map-child/switch-map-child.component';
import { LogService } from '@app/log.service';
import { ChildRecordService } from '../child-record.service';
import { MergeMapChildComponent } from '@app/change-detection-example/stream/merge-map-child/merge-map-child.component';

describe('ChangeParentComponent', () => {
  let component: ChangeParentComponent;
  let fixture: ComponentFixture<ChangeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangeParentComponent,
        ChangeChildComponent,
        NoChangeChildComponent,
        SwitchMapChildComponent,
        SubjectBackedChildComponent,
        MergeMapChildComponent
      ],
      providers: [
        LogService,
        ChildRecordService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
