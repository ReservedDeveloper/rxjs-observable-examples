import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionExampleComponent } from './change-detection-example.component';

describe('ChangeDetectionExampleComponent', () => {
  let component: ChangeDetectionExampleComponent;
  let fixture: ComponentFixture<ChangeDetectionExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDetectionExampleComponent ]
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
