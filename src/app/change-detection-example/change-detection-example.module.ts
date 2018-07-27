import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionExampleRoutingModule } from './change-detection-example-routing.module';
import { ChangeDetectionExampleComponent } from './change-detection-example.component';
import { ChangeParentComponent } from './change-parent/change-parent.component';
import { ChangeGrandparentComponent } from './change-grandparent/change-grandparent.component';
import { ChangeChildComponent } from './change-child/change-child.component';
import { NoChangeChildComponent } from './no-change-child/no-change-child.component';
import { ChildRecordService } from './child-record.service';
import { StreamInputSwitchChildComponent } from './stream-input-switch-child/stream-input-switch-child.component';

@NgModule({
  imports: [
    CommonModule,
    ChangeDetectionExampleRoutingModule
  ],
  declarations: [
    ChangeDetectionExampleComponent,
    ChangeParentComponent,
    ChangeGrandparentComponent,
    ChangeChildComponent,
    NoChangeChildComponent,
    StreamInputSwitchChildComponent
  ],
  providers: [
    ChildRecordService
  ]
})
export class ChangeDetectionExampleModule { }
