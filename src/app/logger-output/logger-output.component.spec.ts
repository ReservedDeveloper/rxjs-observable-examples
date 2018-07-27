import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerOutputComponent } from './logger-output.component';
import { of } from 'rxjs';

describe('LoggerOutputComponent', () => {
  let component: LoggerOutputComponent;
  let fixture: ComponentFixture<LoggerOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggerOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerOutputComponent);
    component = fixture.componentInstance as LoggerOutputComponent;
    component.messagesStream = of('test log message');
    fixture.detectChanges();
  });

  it('should create', (() => {
    expect(component).toBeTruthy();
  }));
});
