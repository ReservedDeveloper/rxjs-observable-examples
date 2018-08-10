import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoChangeChildComponent } from './no-change-child.component';
import { ChildRecordService } from '../../child-record.service';
import { LogService } from '@app/log.service';

describe('NoChangeChildComponent', () => {
  let component: NoChangeChildComponent;
  let fixture: ComponentFixture<NoChangeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoChangeChildComponent ],
      providers: [
        ChildRecordService,
        LogService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoChangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
