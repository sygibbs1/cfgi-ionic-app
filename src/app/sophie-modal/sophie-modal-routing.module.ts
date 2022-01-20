import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SophieModalPage } from './sophie-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SophieModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SophieModalPageRoutingModule {}
