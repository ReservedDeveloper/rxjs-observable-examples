import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapChildComponent } from './merge-map-child.component';
import { LogService } from '@app/log.service';
import { ChildRecordService } from '@app/change-detection-example/child-record.service';

describe('MergeMapChildComponent', () => {
  let component: MergeMapChildComponent;
  let fixture: ComponentFixture<MergeMapChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeMapChildComponent ],
      providers: [
        LogService,
        ChildRecordService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapChildComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
