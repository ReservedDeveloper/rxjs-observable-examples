import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBackedChildComponent } from './subject-backed-child.component';

describe('SubjectBackedChildComponent', () => {
  let component: SubjectBackedChildComponent;
  let fixture: ComponentFixture<SubjectBackedChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectBackedChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectBackedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
