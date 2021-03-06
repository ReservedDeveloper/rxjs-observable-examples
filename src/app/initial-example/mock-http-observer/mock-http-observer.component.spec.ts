import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockHttpObserverComponent } from './mock-http-observer.component';
import { ChunkService } from '../chunk.service';

describe('MockHttpObserverComponent', () => {
  let component: MockHttpObserverComponent;
  let fixture: ComponentFixture<MockHttpObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockHttpObserverComponent ],
      providers: [ ChunkService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockHttpObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
