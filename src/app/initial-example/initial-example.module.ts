import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialExampleRoutingModule } from './initial-example-routing.module';
import { InitialExampleComponent } from './initial-example.component';
import { DataCreatorComponent } from '../data-creator/data-creator.component';
import { DataObserverComponent } from '../data-observer/data-observer.component';
import { MockHttpObserverComponent } from '../mock-http-observer/mock-http-observer.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { ChunkService } from '../chunk.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    InitialExampleRoutingModule
  ],
  declarations: [
    DataCreatorComponent,
    DataObserverComponent,
    MockHttpObserverComponent,
    InitialExampleComponent
  ],
  providers: [
    DataService,
    ChunkService
  ]
})
export class InitialExampleModule { }
