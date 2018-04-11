import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCreatorComponent } from './data-creator.component';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';

describe('DataCreatorComponent', () => {
  let component: DataCreatorComponent;
  let fixture: ComponentFixture<DataCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [DataCreatorComponent],
      providers: [ DataService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
