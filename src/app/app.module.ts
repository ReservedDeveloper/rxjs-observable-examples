import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { ChunkService } from './chunk.service';
import { AppRoutingModule } from './app-routing-module';
import { InitialExampleModule } from './initial-example/initial-example.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    InitialExampleModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    ChunkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
