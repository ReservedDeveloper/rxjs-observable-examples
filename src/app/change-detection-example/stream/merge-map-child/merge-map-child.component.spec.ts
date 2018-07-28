import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapChildComponent } from './merge-map-child.component';

describe('MergeMapChildComponent', () => {
  let component: MergeMapChildComponent;
  let fixture: ComponentFixture<MergeMapChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeMapChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
