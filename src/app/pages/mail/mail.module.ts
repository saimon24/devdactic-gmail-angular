import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailPageRoutingModule } from './mail-routing.module';

import { MailPage } from './mail.page';
import { AccountPageModule } from '../account/account.module';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailPageRoutingModule,
    AccountPageModule,
    SharedDirectivesModule
  ],
  declarations: [MailPage]
})
export class MailPageModule {}
