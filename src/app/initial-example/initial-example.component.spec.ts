import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialExampleComponent } from './initial-example.component';
import { DataCreatorComponent } from '../data-creator/data-creator.component';
import { DataObserverComponent } from '../data-observer/data-observer.component';
import { MockHttpObserverComponent } from '../mock-http-observer/mock-http-observer.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { ChunkService } from '../chunk.service';

describe('InitialExampleComponent', () => {
  let component: InitialExampleComponent;
  let fixture: ComponentFixture<InitialExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        DataCreatorComponent,
        DataObserverComponent,
        MockHttpObserverComponent,
        InitialExampleComponent
      ],
      providers: [
        ChunkService,
        DataService
      ]
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
