import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataCreatorComponent } from './data-creator/data-creator.component';
import { DataObserverComponent } from './data-observer/data-observer.component';
import { DataService } from './data.service';
import { ChunkService } from './chunk.service';
import { MockHttpObserverComponent } from './mock-http-observer/mock-http-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    DataCreatorComponent,
    DataObserverComponent,
    MockHttpObserverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService,
    ChunkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
