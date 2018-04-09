import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataCreatorComponent } from './data-creator/data-creator.component';
import { DataObserverComponent } from './data-observer/data-observer.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataCreatorComponent,
    DataObserverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
