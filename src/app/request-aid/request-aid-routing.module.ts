import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestAidPage } from './request-aid.page';

const routes: Routes = [
  {
    path: '',
    component: RequestAidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestAidPageRoutingModule {}
