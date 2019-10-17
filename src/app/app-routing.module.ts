import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';

const routes: Routes = [
  { path: '', component: DialogOverviewExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
