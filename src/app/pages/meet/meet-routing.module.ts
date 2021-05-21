import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetPage } from './meet.page';

const routes: Routes = [
  {
    path: '',
    component: MeetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetPageRoutingModule {}
