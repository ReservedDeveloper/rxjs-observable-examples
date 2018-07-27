import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ChunkService } from './chunk.service';
import { DataCreatorComponent } from './data-creator/data-creator.component';
import { DataObserverComponent } from './data-observer/data-observer.component';
import { MockHttpObserverComponent } from './mock-http-observer/mock-http-observer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        DataCreatorComponent,
        DataObserverComponent,
        MockHttpObserverComponent,
        AppComponent,
      ],
      providers: [
        DataService,
        ChunkService,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
