import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetPageRoutingModule } from './meet-routing.module';

import { MeetPage } from './meet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetPageRoutingModule
  ],
  declarations: [MeetPage]
})
export class MeetPageModule {}
