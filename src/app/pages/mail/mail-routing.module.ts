import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailPage } from './mail.page';

const routes: Routes = [
  {
    path: '',
    component: MailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailPageRoutingModule {}
