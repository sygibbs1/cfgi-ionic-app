import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SophieModalPageRoutingModule } from './sophie-modal-routing.module';

import { SophieModalPage } from './sophie-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SophieModalPageRoutingModule
  ],
  declarations: [SophieModalPage]
})
export class SophieModalPageModule {}
