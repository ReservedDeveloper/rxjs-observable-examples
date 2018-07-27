import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamInputSwitchChildComponent } from './stream-input-switch-child.component';
import { LogService } from '../../log.service';
import { ChildRecordService } from '../child-record.service';

describe('StreamInputSwitchChildComponent', () => {
  let component: StreamInputSwitchChildComponent;
  let fixture: ComponentFixture<StreamInputSwitchChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamInputSwitchChildComponent ],
      providers: [
        ChildRecordService,
        LogService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamInputSwitchChildComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
