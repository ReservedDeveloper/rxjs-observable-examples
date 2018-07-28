import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeChildComponent } from './change-child.component';
import { LogService } from '../../../log.service';
import { ChildRecordService } from '../../child-record.service';

describe('ChangeChildComponent', () => {
  let component: ChangeChildComponent;
  let fixture: ComponentFixture<ChangeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeChildComponent],
      providers: [
        ChildRecordService,
        LogService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
