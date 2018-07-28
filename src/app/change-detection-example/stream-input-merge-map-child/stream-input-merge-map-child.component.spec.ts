import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamInputMergeMapChildComponent } from './stream-input-merge-map-child.component';

describe('StreamInputMergeMapChildComponent', () => {
  let component: StreamInputMergeMapChildComponent;
  let fixture: ComponentFixture<StreamInputMergeMapChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamInputMergeMapChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamInputMergeMapChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
