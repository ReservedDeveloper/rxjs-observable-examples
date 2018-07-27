import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamInputSwitchChildComponent } from './stream-input-switch-child.component';

describe('StreamInputSwitchChildComponent', () => {
  let component: StreamInputSwitchChildComponent;
  let fixture: ComponentFixture<StreamInputSwitchChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamInputSwitchChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamInputSwitchChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
