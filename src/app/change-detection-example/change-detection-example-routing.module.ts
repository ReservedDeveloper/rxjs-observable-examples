import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDetectionExampleComponent } from './change-detection-example.component';

const routes: Routes = [
  {
    path: 'change',
    component: ChangeDetectionExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionExampleRoutingModule { }
