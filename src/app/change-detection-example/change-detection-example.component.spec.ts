import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionExampleComponent } from './change-detection-example.component';
import { ChangeParentComponent } from './change-parent/change-parent.component';
import { NoChangeChildComponent } from './no-change-child/no-change-child.component';
import { ChangeChildComponent } from './change-child/change-child.component';

describe('ChangeDetectionExampleComponent', () => {
  let component: ChangeDetectionExampleComponent;
  let fixture: ComponentFixture<ChangeDetectionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangeParentComponent,
        NoChangeChildComponent,
        ChangeChildComponent,
        ChangeDetectionExampleComponent, // this declaration must be last to ensure the rest are loaded
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
