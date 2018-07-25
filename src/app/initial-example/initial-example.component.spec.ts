import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialExampleComponent } from './initial-example.component';

describe('InitialExampleComponent', () => {
  let component: InitialExampleComponent;
  let fixture: ComponentFixture<InitialExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
