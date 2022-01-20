import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DavidModalPageRoutingModule } from './david-modal-routing.module';

import { DavidModalPage } from './david-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DavidModalPageRoutingModule
  ],
  declarations: [DavidModalPage]
})
export class DavidModalPageModule {}
