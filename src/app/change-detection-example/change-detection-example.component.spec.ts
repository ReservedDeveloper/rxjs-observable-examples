import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionExampleComponent } from './change-detection-example.component';
import { ChangeParentComponent } from './change-parent/change-parent.component';
import { NoChangeChildComponent } from './no-change-child/no-change-child.component';
import { ChangeChildComponent } from './change-child/change-child.component';
import { SubjectBackedChildComponent } from './subject-backed-child/subject-backed-child.component';
import { StreamInputSwitchChildComponent } from './stream-input-switch-child/stream-input-switch-child.component';
import { LogService } from '../log.service';
import { ChildRecordService } from './child-record.service';

describe('ChangeDetectionExampleComponent', () => {
  let component: ChangeDetectionExampleComponent;
  let fixture: ComponentFixture<ChangeDetectionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangeParentComponent,
        NoChangeChildComponent,
        ChangeChildComponent,
        SubjectBackedChildComponent,
        StreamInputSwitchChildComponent,
        ChangeDetectionExampleComponent, // this declaration must be last to ensure the rest are loaded
      ],
      providers: [
        LogService,
        ChildRecordService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
