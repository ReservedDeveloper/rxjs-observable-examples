import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionExampleRoutingModule } from './change-detection-example-routing.module';
import { ChangeDetectionExampleComponent } from './change-detection-example.component';
import { ChangeParentComponent } from './change-parent/change-parent.component';
import { ChangeGrandparentComponent } from './change-grandparent/change-grandparent.component';
import { ChangeChildComponent } from './primitive/change-child/change-child.component';
import { NoChangeChildComponent } from './primitive/no-change-child/no-change-child.component';
import { ChildRecordService } from './child-record.service';
import { SwitchMapChildComponent } from './stream/switch-map-child/switch-map-child.component';
import { SubjectBackedChildComponent } from './primitive/subject-backed-child/subject-backed-child.component';
import { MergeMapChildComponent } from './stream/merge-map-child/merge-map-child.component';

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
    SwitchMapChildComponent,
    SubjectBackedChildComponent,
    MergeMapChildComponent
  ],
  providers: [
    ChildRecordService
  ]
})
export class ChangeDetectionExampleModule { }
