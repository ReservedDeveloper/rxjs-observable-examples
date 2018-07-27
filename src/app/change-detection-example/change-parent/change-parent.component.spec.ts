import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeParentComponent } from './change-parent.component';
import { NoChangeChildComponent } from '../no-change-child/no-change-child.component';
import { ChangeChildComponent } from '../change-child/change-child.component';

describe('ChangeParentComponent', () => {
  let component: ChangeParentComponent;
  let fixture: ComponentFixture<ChangeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NoChangeChildComponent,
        ChangeChildComponent,
        ChangeParentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
