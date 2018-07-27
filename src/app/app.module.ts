import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { InitialExampleModule } from './initial-example/initial-example.module';
import { ChangeDetectionExampleModule } from './change-detection-example/change-detection-example.module';
import { BrowserModule } from '@angular/platform-browser';
import { LogService } from './log.service';
import { LoggerOutputComponent } from './logger-output/logger-output.component';

@NgModule({
  declarations: [
    LoggerOutputComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InitialExampleModule,
    ChangeDetectionExampleModule,
    AppRoutingModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
