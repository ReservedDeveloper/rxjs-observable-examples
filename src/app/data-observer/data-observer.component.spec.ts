import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataObserverComponent } from './data-observer.component';

describe('DataObserverComponent', () => {
  let component: DataObserverComponent;
  let fixture: ComponentFixture<DataObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
