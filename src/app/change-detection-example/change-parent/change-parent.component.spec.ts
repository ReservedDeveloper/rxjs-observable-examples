import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeParentComponent } from './change-parent.component';

describe('ChangeParentComponent', () => {
  let component: ChangeParentComponent;
  let fixture: ComponentFixture<ChangeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeParentComponent ]
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
