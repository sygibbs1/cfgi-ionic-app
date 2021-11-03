import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestAidPageRoutingModule } from './request-aid-routing.module';

import { RequestAidPage } from './request-aid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestAidPageRoutingModule
  ],
  declarations: [RequestAidPage]
})
export class RequestAidPageModule {}
