import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindJobsPageRoutingModule } from './find-jobs-routing.module';

import { FindJobsPage } from './find-jobs.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindJobsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [FindJobsPage]
})
export class FindJobsPageModule {}
