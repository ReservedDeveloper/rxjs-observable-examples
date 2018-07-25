import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeGrandparentComponent } from './change-grandparent.component';

describe('ChangeGrandparentComponent', () => {
  let component: ChangeGrandparentComponent;
  let fixture: ComponentFixture<ChangeGrandparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeGrandparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeGrandparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
