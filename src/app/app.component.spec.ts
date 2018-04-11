import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { DataService } from './data.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockDataCreatorComponent,
        MockDataObserverComponent,
        MockMockHttpObserverComponent
      ],
      providers: [DataService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

@Component({
  selector: 'app-data-creator',
  template: ''
})
class MockDataCreatorComponent {
}

@Component({
  selector: 'app-data-observer',
  template: ''
})
class MockDataObserverComponent {
}

@Component({
  selector: 'app-mock-http-observer',
  template: ''
})
class MockMockHttpObserverComponent {
}
