import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialExampleComponent } from './initial-example.component';

const routes: Routes = [
  {
    path: 'initial',
    component: InitialExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitialExampleRoutingModule { }
