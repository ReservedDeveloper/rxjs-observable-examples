import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapChildComponent } from './switch-map-child.component';
import { LogService } from '@app/log.service';
import { ChildRecordService } from '../../child-record.service';

describe('SwitchMapChildComponent', () => {
  let component: SwitchMapChildComponent;
  let fixture: ComponentFixture<SwitchMapChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchMapChildComponent ],
      providers: [
        ChildRecordService,
        LogService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapChildComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
